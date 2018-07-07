import moment from 'moment'

export const getToday = () => moment.utc().startOf('day').clone()

export const isToday = timestamp => moment.utc(timestamp).isSame(getToday())

export const isYesterday = timestamp => moment.utc(timestamp).add(1, 'day').isSame(getToday())

export const isTomorrow = timestamp => moment.utc(timestamp).subtract(1, 'day').isSame(getToday())

export const formatTimestamp = timestamp => {
  if (isYesterday(timestamp)) return 'Yesterday'
  if (isToday(timestamp)) return 'Today'
  if (isTomorrow(timestamp)) return 'Tomorrow'
  return moment.utc(timestamp).format('dddd, MMMM Do YY')
}
