import Koa from 'koa'
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
import router from './router'

import config from './config'

const app = new Koa();

app.keys = ['some secret hurr'];

app
    .use(finalHandler())
    .use(favicon(config.favicon))
    .use(views(`${__dirname}/views`, {
        map: {
            html: 'nunjucks'
        }
    }))
    .use(logger())
    .use(bodyParser())

    .use(convert(session(app)))
    .use(convert(cors()))
    .use(compress(config.compress))
    .use(serve(__dirname + '/public'))
    .use(router.routes())
    .use(router.allowedMethods())

export default app;
