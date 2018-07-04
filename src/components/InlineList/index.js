import React from 'react'
import { Root } from './styles'

const InlineList = ({
  align = 'center',
  children,
  size = 'md'
}) => (
  <Root align={align} size={size}>
    {children}
  </Root>
)

export default InlineList
