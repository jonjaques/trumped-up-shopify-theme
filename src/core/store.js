import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {
  createStore as createFinalizedStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'


export function createStore(reducers = {}, initialState = {}) {

  const middleware = [
    promise,
    thunk
  ]

  return createFinalizedStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )
}
