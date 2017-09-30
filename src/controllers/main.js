import fs from 'fs-extra'
import path from 'path'

export const get = async ctx => {
    const linkReg = /(.+)\.md$/,
        infoReg = /---([^]+)---\n([^]+)/m,
        timeReg = /(\d{4}-\d{2}-\d{2})/i,
        titleReg = /title\s*:\s*(.+)/i,
        filepath = path.resolve(__dirname, '../public/blogs');
console.log(filepath);
    let files = await fs.readdir(filepath);

    let list = files
        .filter( file => /\.md$/.test(file))
        .map( file => {
            let result = file.match(/^(\d{4}-\d{2}-\d{2})-(\S+)\.md$/);
            return {
                time: result[1],
                name: result[2]
            }
        })
    // console.log(list);
//     let list = files.map( file => {
//         let i = file.content.match(infoReg),
//             info = i && i[1],
//             ti = file.path.match(timeReg),
//             time = ti && ti[1],
//             t = info.match(titleReg),
//             title = t && t[1],
//             h = file.path.match(linkReg),
//             href = h && '/blog/' + h[1].trim();

//         return {
//             title
//             , time
//             , href
//         }
//     }).reverse();

    ctx.body = {
         retcode: 0,
         result: {
             list
         }
    }
}
