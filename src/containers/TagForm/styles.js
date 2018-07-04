import styled from '../../lib/styled'

export const Root = styled(theme => ({
  textAlign: 'center'
}))

export const Background = styled((theme, props) => {
  const activeTheme = props.active ? theme.colors.reverse : theme.colors.shade
  const currentTheme = props.tempTheme ? theme.colors[props.tempTheme] : activeTheme

  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.rhythm(0.25),
    borderRadius: theme.rhythm(2),
    backgroundColor: currentTheme.background,
    color: currentTheme.foreground,
    transition: theme.transitions.ease,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: props.active ? currentTheme.background : theme.colors.reverse.background,
      color: props.active ? currentTheme.foreground : theme.colors.reverse.foreground
    }
  }
})

export const Button = styled(theme => ({
  display: 'block',
  padding: theme.rhythm(0.25)
}), 'button')

export const Form = styled((theme, props) => ({
  display: props.active ? 'flex' : 'none',
  alignItems: 'center',
  marginLeft: theme.rhythm(0.5),
  width: theme.rhythm(5),
  textAlign: 'left',
  fontSize: theme.sizes.sm
}), 'form')

export const Input = styled(theme => ({
  width: '100%',
  paddingLeft: theme.rhythm(0.25)
}), 'input')
