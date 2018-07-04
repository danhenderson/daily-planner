import styled from 'react-emotion'

// Helpers
export default (styles, tag = 'div') => (
  styled(tag)(props => styles(props.theme, props))
)
