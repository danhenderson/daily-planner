import React from 'react'
import { Root, Label } from './styles'
import ContextualMenu from '../ContextualMenu'
import IconButton from '../IconButton'

const Checkbox = ({
  complete,
  description,
  onDelete,
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
    <ContextualMenu
      title={description}
      items={[
        {
          label: 'Delete',
          icon: 'bin',
          onClick: onDelete
        }
      ]}
    />
  </Root>
)

export default Checkbox
