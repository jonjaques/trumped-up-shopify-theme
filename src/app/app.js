import React from 'react'
import {createStore, requireAll, Provider} from 'core'
import Counter from 'connectors/counter'

const reducers = requireAll(require.context('./ducks', true, /\.js$/))
const store = createStore(reducers, global.__STATE__)

const Application = props => {
  return <Provider store={store}>
    <Counter />
  </Provider>
}

export default Application
