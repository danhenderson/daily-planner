import React from 'react'
import { Root } from './styles'
import Icon from '../Icon'

const IconButton = ({
  icon,
  onClick,
  rotate
}) => (
  <Root onClick={onClick}>
    <Icon
      name={icon}
      rotate={rotate}
      size={0.5}
    />
  </Root>
)

export default IconButton
