import React from 'react'
import { Root } from './styles'

const Container = ({
  children,
  maxWidth
}) => (
  <Root maxWidth={maxWidth}>
    {children}
  </Root>
)

export default Container
