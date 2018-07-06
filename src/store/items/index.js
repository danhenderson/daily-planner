import uuid from 'uuid/v1'

// Constants
const c = {
  ADD: 'app/items/ADD',
  DELETE: 'app/items/DELETE',
  EDIT: 'app/items/EDIT'
}

// Action Handlers
export const addItem = data => ({
  type: c.ADD,
  payload: data
})

export const deleteItem = id => ({
  type: c.DELETE,
  payload: { id }
})

export const editItem = (id, data) => ({
  type: c.EDIT,
  payload: { id, data }
})

// Reducer
const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case c.ADD:
      return state.concat(Object.assign({ id: uuid() }, payload))
    case c.EDIT:
      return state.map(
        item => item.id !== payload.id
          ? item
          : Object.assign({}, item, payload.data)
      )
    case c.DELETE:
      return state.filter(
        item => item.id !== payload.id
      )
    default:
      return state
  }
}
