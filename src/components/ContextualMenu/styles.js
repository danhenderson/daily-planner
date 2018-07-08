import styled from '../../lib/styled'

export const Root = styled(theme => ({
  position: 'relative'
}))

export const MenuWrapper = styled(theme => ({
  position: 'fixed',
  zIndex: 12,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: theme.colors.standard.background
}))

export const Menu = styled(theme => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxWidth: '100%',
  minWidth: theme.rhythm(14),
  transform: 'translate(-50%, -50%)',
  padding: theme.rhythm(1),
  paddingTop: theme.rhythm(4)
}))

export const Close = styled(theme => ({
  position: 'absolute',
  zIndex: 4,
  top: theme.rhythm(1),
  left: '50%',
  transform: 'translateX(-50%)'
}))

export const MenuItem = styled(theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: theme.rhythm(-0.25),
  marginBottom: theme.rhythm(0.5),

  '& > *': {
    margin: theme.rhythm(0.25)
  }
}))
