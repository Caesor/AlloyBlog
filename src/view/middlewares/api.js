import fetch from 'isomorphic-fetch'
import { DOMAIN } from '../../config'

export const CALL_API = Symbol('CALL_API');

export default store => next => action => {
    if( !action[CALL_API] ) {
        return next(action);
    }

    let request = action[CALL_API];
    let { getState } = store;
    let { method, url, body, successType } = request;
    let opt = {
        method,
        credentials: 'same-origin'
    }
    
    url = ~url.indexOf(DOMAIN) ? url : DOMAIN + url;

    if(method === 'POST'){
        opt.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        opt.body = getParamStr(body);
    }else if(method === 'GET') {
        url += '?' + getParamStr(body);
    }else {

    }
    
    return fetch(url, opt)
    .then( res => res.json())
    .then( data => {
        next({
            type: successType,
            data: data.result
        });
    })
}

function getParamStr(params) {
    if (!params) {
        params = {};
    }

    return Object.keys(params)
        .map( k => {
            return k + '=' + encodeURIComponent(params[k]);
        })
        .join('&');
}