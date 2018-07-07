import styled from '../../lib/styled'

export const Root = styled(theme => ({
  display: 'flex',
  margin: theme.rhythm(-0.5),

  '& > *': {
    margin: theme.rhythm(0.5)
  }
}))

export const Label = styled(theme => ({
  paddingTop: theme.rhythm(0.5),
  paddingBottom: theme.rhythm(0.5)
}))
