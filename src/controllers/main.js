import fs from 'fs'

export const get = async ctx => {
//     const linkReg = /(.+)\.md$/,
//         infoReg = /---([^]+)---\n([^]+)/m,
//         timeReg = /(\d{4}-\d{2}-\d{2})/i,
//         titleReg = /title\s*:\s*(.+)/i,
//         filepath = __dirname + '/../../public/blogs';
// console.log(filepath);
//     let paths = await fs.readdir(filepath);
// console.log(paths);
//     paths = paths.filter( path => {
//         return /\.md$/.test(path);
//     });
//
//     let files = await paths.map( path => {
//         return {
//             path,
//             content: fs.readFile(filepath + path, 'utf8')
//         }
//     })
//
//     let list = files.map( file => {
//         let i = file.content.match(infoReg),
//             info = i && i[1],
//             ti = file.path.match(timeReg),
//             time = ti && ti[1],
//             t = info.match(titleReg),
//             title = t && t[1],
//             h = file.path.match(linkReg),
//             href = h && '/blog/' + h[1].trim();
//
//         return {
//             title
//             , time
//             , href
//         }
//     }).reverse();

    ctx.body = {
         retcode: 3
    }
}
