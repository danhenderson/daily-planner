import styled from '../../lib/styled'

export const Root = styled((theme, props) => ({
  textAlign: props.align,
  fontSize: theme.sizes[props.size],
  ...theme.getFontStyles('head')
}))
