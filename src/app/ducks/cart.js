import {createAction, handleActions} from 'core'

export const counter = createAction('app/COUNTER')

const initialState = {count: 0}

export default handleActions({
  [counter]: state => ({
    ...state, count: state.count + 1
  })
}, initialState)
