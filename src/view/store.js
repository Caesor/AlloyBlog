import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from './middlewares/api.js'

import reducers from './reducers'

const reducer = combineReducers({
    ...reducers
})

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk, api, createLogger)
)

export default configureStore;