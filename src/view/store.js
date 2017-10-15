import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import api from './middlewares/api.js'

import * as reducers from './reducers'
import blog from './reducers/blog.js'

let isBrowser = typeof window !== 'undefined';
let composeEnhancers = compose;

if(isBrowser){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const reducer = combineReducers({
    ...reducers
})

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    isBrowser ?
    composeEnhancers(
        applyMiddleware(thunk, api)
    ) : applyMiddleware(thunk, api) 
)

export default configureStore;