import React from 'react'
import { DOMAIN } from '../config'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../view/store'
import fetch from 'isomorphic-fetch'
import Layout from '../view/containers/Layout'
import { template } from '../view/template'

const serverRender = async (ctx, next) => {
    const context = {};
    const data = await getInitData(ctx.url);
    
    const store = configureStore(data.result);

    ctx.body = template(
        renderToString(
            <Provider store={store}>
                <StaticRouter location={ctx.url} context={context}>
                    <Layout />
                </StaticRouter>
            </Provider>
        ),
        data.result
    );
}

const getInitData = async (url) => {
    let cgi = '';
    if (url === '/') {
        cgi = DOMAIN + '/bloglist';
    } else if(/^\/blog\S+\.md$/.test(url)){
        cgi = DOMAIN + url;
    } else {
        cgi = DOMAIN + '/bloglist';
    }
    let res = await fetch(cgi);
    return res.json();
}

export default serverRender;