import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import compress from 'koa-compress'
import favicon from 'koa-favicon'
// import views from 'koa-views'
import serve from 'koa-static'
import cors from 'kcors'
import onerror from 'koa-onerror'
import finalHandler from './middlewares/finalHandler'

import config from './config'

const app = new Koa();

onerror(app);

app.keys = ['alloy team'];

app
    .use(finalHandler())
    .use(bodyParser({
        strict: true
    }))
    .use(logger())
    .use(compress(config.compress))
    .use(favicon(config.favicon))
    .use(session(config.session, app))
    .use(cors())
    .use(serve(__dirname + '/public'))
    .use(async (ctx, next) => {
        await require('./router').routes()(ctx, next)
    })
    .use(async (ctx, next) => {
        await require('./middlewares/serverRender.js')(ctx, next)
    })

app
    .on('error', (err, ctx) => {
        console.log('server error', err, ctx);
    })
    .listen(config.port, () => {
        console.log(`Koa is listening to localhost:${config.port}`)
    })

export default app;
