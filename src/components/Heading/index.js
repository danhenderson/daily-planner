import React from 'react'
import { Root } from './styles'

const Heading = ({
  align,
  children,
  size = 'lg'
}) => (
  <Root align={align} size={size}>
    {children}
  </Root>
)

export default Heading
