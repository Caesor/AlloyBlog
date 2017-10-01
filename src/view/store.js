import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import api from './middlewares/api.js'

import archive from './reducers/archive.js'

const reducer = combineReducers({
    archive
})

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk, logger)
)

export default configureStore;