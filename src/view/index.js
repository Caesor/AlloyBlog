import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './containers/Layout'

const store = configureStore(window.__DATA__);

hydrate(
    <Provider store={store}>
        <Router>
            <Layout />
        </Router>
    </Provider>
    ,
	document.getElementById('app')
);