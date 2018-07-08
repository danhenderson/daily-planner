import React from 'react'
import { Root, Label } from './styles'
import IconButton from '../IconButton'

const Checkbox = ({
  complete,
  description,
  onToggle
}) => (
  <Root>
    <IconButton
      color={complete ? 'success' : 'danger'}
      icon={complete ? 'check' : 'close'}
      onClick={onToggle}
      size={0.25}
    />
    <Label>
      {description}
    </Label>
  </Root>
)

export default Checkbox
