import React from 'react'
import { Root } from './styles'

const Layout = ({
  children = [],
  spacing
}) => (
  <Root spacing={spacing}>
    {children.map((child, index) => (
      <div key={index}>{child}</div>
    ))}
  </Root>
)

export default Layout
