import React from 'react'
import { Root } from './styles'

const Box = ({
  children,
  spacing
}) => (
  <Root spacing={spacing}>
    {children}
  </Root>
)

export default Box
