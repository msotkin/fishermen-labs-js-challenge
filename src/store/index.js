import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import products from './products/duck'

const middleware = [
  thunk,
  promise()
]

const reducers = combineReducers({
  products
})

export default (initialState = {}) => createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
