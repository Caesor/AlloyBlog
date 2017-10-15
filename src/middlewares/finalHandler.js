export default function finalHandler() {
    return async (ctx, next) => {
        try {
            await next();
            const status = ctx.status || 404;
            if (status === 404) ctx.throw(404);
        } catch (error) {
            ctx.status = error.status || 500;
            if (ctx.status === 404) {
                ctx.body = {
                    recode: 404,
                    result: error
                }
            } else if(ctx.status === 500){
                ctx.body = {
                    recode: 500,
                    result: error
                }
            }
            ctx.app.emit('error', error, ctx);
        }
    };
}
