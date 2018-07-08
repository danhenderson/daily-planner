import styled from '../../lib/styled'

export const Root = styled((theme, props) => ({
  display: 'inline-block',
  padding: theme.rhythm(0.5),
  borderRadius: theme.rhythm(2),
  backgroundColor: theme.colors[props.color].background,
  color: theme.colors[props.color].foreground,
  transition: theme.transitions.ease,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.reverse.background,
    color: theme.colors.reverse.foreground
  }
}), 'div')
