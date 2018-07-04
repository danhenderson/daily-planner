import first from 'lodash/first'

export const required = (msg = 'Field is required') => (val) => !val && msg

export const hashtag = (msg = 'Field should be a valid hashtag') => (val) => !/^\S*$/.test(val) && msg

export const unique = (existing = [], msg = 'Value should be unique') => (val) => existing.filter(existingVal => existingVal === val).length > 0 && msg

export default (validators, value) => (
  first(
    validators.map(validator => validator(value)).filter(validator => !!validator)
  )
)
