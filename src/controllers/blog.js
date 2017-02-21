export const get = async ctx => {
    ctx.body = {
         method: 'query'
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
