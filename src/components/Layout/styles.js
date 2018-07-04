import styled from '../../lib/styled'

export const Root = styled((theme, props) => {
  const isNumber = typeof props.spacing === 'number'

  return {
    marginTop: theme.rhythm((isNumber ? props.spacing : props.spacing[0]) * -1),
    marginRight: theme.rhythm((isNumber ? props.spacing : props.spacing[1]) * -1),
    marginBottom: theme.rhythm((isNumber ? props.spacing : props.spacing[2]) * -1),
    marginLeft: theme.rhythm((isNumber ? props.spacing : props.spacing[3]) * -1),

    '& > *': {
      marginTop: theme.rhythm(isNumber ? props.spacing : props.spacing[0]),
      marginRight: theme.rhythm(isNumber ? props.spacing : props.spacing[1]),
      marginBottom: theme.rhythm(isNumber ? props.spacing : props.spacing[2]),
      marginLeft: theme.rhythm(isNumber ? props.spacing : props.spacing[3])
    }
  }
})
