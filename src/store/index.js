import { createStore, combineReducers } from 'redux'
import days from './days'
import items from './items'
import tags from './tags'

export default (initialState = {}) => {
  const reducers = combineReducers({
    days,
    items,
    tags
  })

  return createStore(reducers, initialState)
}
