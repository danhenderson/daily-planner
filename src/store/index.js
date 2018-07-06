import { createStore, combineReducers } from 'redux'
import items from './items'
import tags from './tags'

export default (initialState = {}) => {
  const reducers = combineReducers({
    items,
    tags
  })

  return createStore(reducers, initialState)
}
