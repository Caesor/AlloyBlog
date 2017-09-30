import React from 'react'

import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../view/store'
import fetch from 'isomorphic-fetch'
import Main from '../view/main.js'
import { template } from '../view/template'

const serverRender = async (ctx, next) => {
    const context = {};
    const data = await getBloglist();
    
    const store = configureStore(data);

    ctx.body = template(
        renderToString(
            <Provider store={store}>
                <StaticRouter location={ctx.url} context={context}>
                    <Main/>
                </StaticRouter>
            </Provider>
        ),
        data
    );
}

const getBloglist = async () => {
    let res = await fetch('http://localhost:3000/cgi-bin/bloglist');
    return res.json();
}

export default serverRender;