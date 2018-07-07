import moment from 'moment'
import first from 'lodash/first'
import last from 'lodash/last'

// Constants
const c = {
  APPEND: 'app/days/APPEND',
  PREPEND: 'app/days/PREPEND'
}

// Action Handlers
export const appendDay = () => ({
  type: c.APPEND
})

export const preprendDay = () => ({
  type: c.PREPEND
})

// Helpers
const createDay = (dayMoment, today) => ({
  timestamp: dayMoment.toISOString(),
  default: today
})

// Reducer
const today = moment.utc().startOf('day')
const initialRange = [ -3, -2, -1, 0, 1, 2, 3 ]
const initialState = initialRange.map(days => (
  createDay(today.clone().add(days, 'days'), days === 0)
))

export default (state = initialState, { type }) => {
  switch (type) {
    case c.APPEND:
      const firstDay = first(state)
      return state.concat()
    case c.PREPEND:
      return state.concat('old')
    default:
      return state
  }
}
