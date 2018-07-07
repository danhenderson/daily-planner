import styled from '../../lib/styled'

export const Root = styled(theme => ({
  display: 'flex',
  margin: theme.rhythm(-0.5),

  '& > *': {
    margin: theme.rhythm(0.5)
  }
}))

export const Input = styled(theme => ({
  flex: 1,
  paddingTop: theme.rhythm(0.5),
  paddingBottom: theme.rhythm(0.5)
}), 'input')
