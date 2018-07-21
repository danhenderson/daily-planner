import styled from '../../lib/styled'

export const Root = styled(theme => ({
  margin: theme.rhythm(1)
}))

export const Header = styled(theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.rhythm(-1),

  '& > *': {
    margin: theme.rhythm(1)
  }
}))
