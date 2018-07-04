import styled from '../../lib/styled'

export const Svg = styled((theme, props) => ({
  fill: props.color,
  display: 'block',
  width: theme.rhythm(props.size),
  height: theme.rhythm(props.size),
  transform: `rotate(${props.rotate}deg)`
}), 'svg')
