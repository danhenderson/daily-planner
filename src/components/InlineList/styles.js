import styled from '../../lib/styled'

const sizes = {
  sm: 0.25,
  md: 0.5,
  lg: 1
}

export const Root = styled((theme, props) => ({
  margin: theme.rhythm(sizes[props.size] * -1),
  textAlign: props.align,

  '& > div': {
    margin: theme.rhythm(sizes[props.size])
  }
}))
