import fs from 'fs-extra'
import path from 'path'

export const get = async ctx => {
    const filepath = path.resolve(__dirname, '../public/blogs');

    let files = await fs.readdir(filepath);

    let list = files
        .filter( file => /\.md$/.test(file))
        .map( file => {
            let result = file.match(/^(\d{4}-\d{2}-\d{2})-(\S+)\.md$/);
            return {
                filename: file,
                time: result[1],
                title: result[2]
            }
        })
        .reverse();

    ctx.body = {
         retcode: 0,
         result: {
             archive: list
         }
    }
}
