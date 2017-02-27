import Router from 'koa-router'

export default class autoRouter extends Router{
    constructor(){
        super();
    }

    set(pathname, controller) {

        ['get', 'post', 'del', 'patch', 'put'].forEach( method => {
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
