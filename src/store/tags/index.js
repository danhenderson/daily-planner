import uuid from 'uuid/v1'

// Constants
const c = {
  ADD: 'app/tags/ADD',
  DELETE: 'app/tags/DELETE'
}

// Action Handlers
export const addTag = name => ({
  type: c.ADD,
  payload: { name }
})

export const deleteTag = id => ({
  type: c.DELETE,
  payload: { id }
})

// Selector
export const selectTags = state => (
  Object.keys(state.tags).map(id => ({ id, ...state.tags[id] }))
)

export const selectTagNames = state => (
  selectTags(state).map(tag => tag.name)
)

// Reducer
const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case c.ADD:
      return { ...state, [uuid()]: payload }
    case c.DELETE:
      return { ...state, [payload.id]: null }
    default:
      return state
  }
}
