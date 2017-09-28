import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'

import fetch from 'isomorphic-fetch'
import Main from '../view/main.js'
import { template } from '../view/template'

const serverRender = async (ctx, next) => {
    const context = {};
    const data = await getBloglist();
    console.log(data)
    // const store = createStore(data);
    ctx.body = template(
        renderToString(
                <StaticRouter location={ctx.url} context={context}>
                    <Main />
                </StaticRouter>
        ),
        'JSON.stringify(data)'
    );
}

const getBloglist = async () => {
    let res = await fetch('http://localhost:3000/cgi-bin/bloglist');
    return res.json();
}

export default serverRender;