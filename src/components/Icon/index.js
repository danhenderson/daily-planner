import React from 'react'
import { Svg } from './styles'
import * as icons from './icons'

const Icon = ({
  color,
  name,
  rotate,
  size
}) => (
  <Svg
    color={color}
    name={name}
    rotate={rotate}
    size={size}
    viewBox={'0 0 32 32'}>
    {icons[name].map((pathProps, i) => (
      <path {...pathProps} key={i} />
    ))}
  </Svg>
)

Icon.defaultProps = {
  color: 'currentColor',
  rotate: 0,
  size: 1
}

export default Icon
