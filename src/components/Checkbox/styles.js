import styled from '../../lib/styled'

export const Root = styled(theme => ({
  display: 'flex',
  alignItems: 'flex-start',
  margin: theme.rhythm(-0.5),

  '& > *': {
    margin: theme.rhythm(0.5)
  }
}))

export const Label = styled(theme => ({
  paddingTop: theme.rhythm(0.375),
  paddingBottom: theme.rhythm(0.375)
}))
