import React from 'react'
import { Root, Label } from './styles'
import IconButton from '../IconButton'

const Checkbox = ({
  completed
}) => (
  <Root>
    <IconButton
      color={completed ? 'success' : 'danger'}
      icon={completed ? 'check' : 'close'}
      size={0.25}
    />
    <Label>
      Lorem ipsum sidium espor
    </Label>
  </Root>
)

export default Checkbox
