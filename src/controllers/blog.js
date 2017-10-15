import fs from 'fs-extra'
import path from 'path'

export const get = async ctx => {
    const { version } = ctx.query;
    const filename = ctx.params.bid;
    const filepath = path.resolve(__dirname, '../public/blogs', filename);
    
    const linkReg = /(.+)\.md$/,
        infoReg = /---([^]+)---[\r\n]([^]+)/m,
        timeReg = /(\d{4}-\d{2}-\d{2})/i,
        titleReg = /title\s*:\s*(.+)/i,
        categoryReg = /categories\s*:\s*(.+)/i,
		tagReg = /tags\s*:\s*(.+)/i;

    let file = '';
    let result = '';
    try{
        file = await fs.readFile(filepath, 'utf-8');
    }catch(e){
        result = e.message;
        console.log('file read error: ', e);
    }
    let title, categories, tags, time, content;

    if( file ) {
        if(version) {
            ctx.body = {
                retcode: 0,
                result: {
                    blog: file
                }
            }
            return;
        }
        const f = file.match(infoReg);
        const info = (f && f[1]) || '';
        content = f && f[2];
        title = info.match(titleReg)[1];
        categories = info.match(categoryReg)[1];
        tags = info.match(tagReg)[1];
        time = filename.match(timeReg)[1];

        ctx.body = {
            retcode: 0,
            result: {
                blog: {
                    title,
                    categories,
                    tags,
                    content,
                    time
                }
            }
       }
    }else {
        ctx.body = {
            retcode: 401,
            result
        }
    }
}

export const post = async ctx => {
    ctx.body = {
        method: 'add'
    }
}

export const del = async ctx => {
    ctx.body = {
        method: 'remove'
    }
}

export const patch = async ctx => {
    ctx.body = {
        method: 'patch'
    }
}
