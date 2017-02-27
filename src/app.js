import Koa from 'koa'
import http from 'http'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session2'
import compress from 'koa-compress'
import favicon from 'koa-favicon'
import views from 'koa-views'
import convert from 'koa-convert'
import serve from 'koa-static'
import cors from 'koa-cors'
import finalHandler from './middlewares/finalHandler'
// import router from './router'

import config from './config'

const app = new Koa();

app.keys = ['some secret hurr'];

app
    .use(finalHandler())
    .use(bodyParser())
    .use(logger())
    .use(compress(config.compress))
    .use(favicon(config.favicon))
    .use(views(`${__dirname}/views`, {
        map: {
            html: 'nunjucks'
        }
    }))
    .use(convert(session(app)))
    .use(convert(cors()))
    .use(serve(__dirname + '/public'))
    .use(async (ctx, next) => {
        await require('./router').routes()(ctx, next)
    })

app
    .on('error', (err, ctx) => {
        console.log('server error', err, ctx);
    })
    .listen(config.port, () => {
        console.log(`Koa is listening to localhost:${config.port}`)
    })

export default app;
