export const query = async ctx => {
    ctx.body = {
         method: 'query'
    }
}

export const add = async ctx => {
    ctx.body = {
        method: 'add'
    }
}

export const remove = async ctx => {
    ctx.body = {
        method: 'remove'
    }
}

export const patch = async ctx => {
    ctx.body = {
        method: 'patch'
    }
}
