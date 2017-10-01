export const get = async ctx => {
    ctx.body = {
         method: 1
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
