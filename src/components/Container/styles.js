import styled from '../../lib/styled'

export const Root = styled((theme, props) => ({
  maxWidth: theme.rhythm(props.maxWidth),
  margin: '0 auto'
}))
