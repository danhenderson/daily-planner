import { createStore, combineReducers } from 'redux'
import tags from './tags'

export default (initialState = {}) => {
  const reducers = combineReducers({
    tags
  })

  return createStore(reducers, initialState)
}
