import Path from 'path'

export {Provider, connect} from 'react-redux'
export {createAction, handleActions} from 'redux-actions'
export {createStore} from './store'

export function requireAll(context) {
  return context.keys().reduce((m, path) => {
    let name = Path.basename(path, Path.extname(path))
    let module = context(path)
    m[name] = module.__esModule && module.default ? module.default : module
    return m
  }, {})
}
