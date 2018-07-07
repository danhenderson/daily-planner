import styled from '../../lib/styled'

export const Root = styled(theme => ({
  display: 'flex',
  margin: theme.rhythm(-0.5),

  '& > *': {
    margin: theme.rhythm(0.5)
  }
}), 'form')

export const Input = styled(theme => ({
  flex: 1,
  paddingTop: theme.rhythm(0.375),
  paddingBottom: theme.rhythm(0.375),
  '&::placeholder': {
    opacity: 0.25
  }
}), 'input')
