export default function finalHandler() {
    return async (ctx, next) => {
        try {
            await next();
            const status = ctx.status || 404;
            if (status === 404) ctx.throw(404);
        } catch (error) {
            ctx.status = error.status || 500;
            if (ctx.status === 404) {
                // await ctx.render('404', { error });
            } else {
                // await ctx.render('error', { error });
            }
            ctx.app.emit('error', error, ctx);
        }
    };
}
