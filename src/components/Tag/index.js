import React from 'react'
import { Root } from './styles'

const Tag = ({
  name
}) => (
  <Root>{`#${name}`}</Root>
)

export default Tag
