import styled from '../../lib/styled'

export const Root = styled((theme, props) => {
  const isNumber = typeof props.spacing === 'number'

  return {
    paddingTop: theme.rhythm(isNumber ? props.spacing : props.spacing[0]),
    paddingRight: theme.rhythm(isNumber ? props.spacing : props.spacing[1]),
    paddingBottom: theme.rhythm(isNumber ? props.spacing : props.spacing[2]),
    paddingLeft: theme.rhythm(isNumber ? props.spacing : props.spacing[3]),
  }
})
