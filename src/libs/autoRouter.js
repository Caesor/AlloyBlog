import Router from 'koa-router'

export default class autoRouter extends Router{
    constructor(){
        super();
    }

    set(pathname, controller) {
        // this
        //     .get(pathname, controller.get)
        //     .post(pathname.replace(/\/:\w+\/?$/g, ''), controller.post)
        //     .del(pathname, controller.del)
        //     .patch(pathname, controller.patch)
        ['get', 'post', 'del', 'patch'].forEach( method => {
            if(controller[method]){
                if(method === 'post'){
                    this[method](pathname.replace(/\/:\w+\/?$/g, ''), controller[method])
                }else {
                    this[method](pathname, controller[method])
                }

            }
        })

        return this;
    }
}
