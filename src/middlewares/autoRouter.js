import Router from 'koa-router'

export default function autoRouter(pathname) {
    const router = new Router();

    router
        .get(`/${pathname}/:bid`, pathname.query)
        .post(`/${pathname}/:bid`, pathname.add)
        .delete(`/${pathname}/:bid`, pathname.remove)
        .patch(`/${pathname}/:bid`, pathname.patch)

    return router;
}
