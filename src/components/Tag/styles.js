import styled from '../../lib/styled'

export const Root = styled(theme => ({
  display: 'inline-block',
  padding: `${theme.rhythm(0.25)} ${theme.rhythm(0.5)}`,
  borderRadius: theme.rhythm(2),
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: theme.transitions.ease,
  backgroundColor: theme.colors.shade.background,
  color: theme.colors.shade.foreground,
  fontSize: theme.sizes.sm,
  ...theme.getFontStyles('head'),

  '&:hover': {
    backgroundColor: theme.colors.reverse.background,
    color: theme.colors.reverse.foreground
  }
}))
