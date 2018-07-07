import styled from '../../lib/styled'

export const Root = styled(theme => ({
  display: 'block',
  padding: theme.rhythm(0.5),
  borderRadius: theme.rhythm(2),
  backgroundColor: theme.colors.shade.background,
  color: theme.colors.shade.foreground,
  transition: theme.transitions.ease,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.reverse.background,
    color: theme.colors.reverse.foreground
  }
}))
