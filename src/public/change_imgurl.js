const fsExtra = require('fs-extra')
const path = require('path')

const s = async () => {
    const list = await fsExtra.readdir('./blogs');
    // console.log(list);

    list.forEach( async file => {
        let c = await fsExtra.readFile(path.resolve('./blogs', file), 'utf-8')
        let c1 = c.replace(/(\{\{site\.blogimgurl\}\})/g, 'http://localhost:3000/blog_img');
        await fsExtra.outputFile(`./new/${file}`, c1)    
    })   
}

s();


