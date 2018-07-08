import { createStore, combineReducers } from 'redux'
import { getLocalStorage, setLocalStorage } from '../lib/localStorage'
import days from './days'
import items from './items'
import tags from './tags'

const reducers = combineReducers({
  days,
  items,
  tags
})

const initialState = getLocalStorage('daily-planner-state')

const store = createStore(reducers, initialState)

store.subscribe(() => {
  const { items, tags } = store.getState()
  setLocalStorage('daily-planner-state', { items, tags })
})

export default store
