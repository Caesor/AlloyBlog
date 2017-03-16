import path from 'path'
import fs from 'fs'
import debug from 'debug'
import chokidar from 'chokidar'
import babelCliDir from 'babel-cli/lib/babel/dir'
import babelCliFile from 'babel-cli/lib/babel/file'
import colors from 'colors'

const projectRootPath = path.resolve(__dirname, '..'),
    srcPath = path.join(projectRootPath, 'src'),
    appPath = path.join(projectRootPath, 'app'),
    devDebug = debug('dev'),
    log = console.log.bind(console, '>>> [DEV]:'.red),
    watcher = chokidar.watch(path.join(__dirname, '../src'))

watcher.on('ready', function () {
    log('Compiling...'.green)
    babelCliDir({
        outDir: 'app/',
        retainLines: true,
        sourceMaps: true
    }, [ 'src/' ]) // compile all when start

    require('../app') // start app
    log('♪ App Started'.green)

    watcher
        .on('add', function (absPath) {
            compileFile('src/', 'app/', path.relative(srcPath, absPath), cacheClean)
        })
        .on('change', function (absPath) {
            compileFile('src/', 'app/', path.relative(srcPath, absPath), cacheClean)
        })
        .on('unlink', function (absPath) {
            var rmfileRelative = path.relative(srcPath, absPath)
            var rmfile = path.join(appPath, rmfileRelative)
            try {
                fs.unlinkSync(rmfile)
                fs.unlinkSync(rmfile + '.map')
            } catch (e) {
                devDebug('fail to unlink', rmfile)
                return
            }
            console.log('Deleted', rmfileRelative)
            cacheClean()
        })
})


function compileFile (srcDir, outDir, filename, cb) {
    const outFile = path.join(outDir, filename),
        srcFile = path.join(srcDir, filename);
        
    try {
        babelCliFile({
            outFile: outFile,
            retainLines: true,
            highlightCode: true,
            comments: true,
            babelrc: true,
            sourceMaps: true
        }, [ srcFile ], {
            highlightCode: true,
            comments: true,
            babelrc: true,
            ignore: [],
            sourceMaps: true
        })
    } catch (e) {
        console.error('Error while compiling file %s', filename, e)
        return
    }
    console.log(srcFile + ' -> ' + outFile)
    cb && cb()
}

function cacheClean () {
    Object.keys(require.cache).forEach(function (id) {
        if (/[\/\\](app)[\/\\]/.test(id)) {
            delete require.cache[id]
        }
    })
    log('♬ App Cache Cleaned...'.green)
}

process.on('exit', function (e) {
    log(' ♫ App Quit'.green)
})
