import * as main from './controllers/main'
import * as login from './controllers/login'
import * as signup from './controllers/signup'
import * as logout from './controllers/logout'
import * as blog from './controllers/blog'
import * as user from './controllers/user'

import autoRouter from './libs/autoRouter'

const router = new autoRouter();

router
    .get('/', main.get)
    .set('/login', login)
    .set('/signup', signup)
    .get('/logout', logout.get)

    .set('/blog/:bid', blog)
    .set('/user/:uid', user)

export default router;
