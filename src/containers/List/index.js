import React from 'react'
import { formatTimestamp } from '../../lib/dates'
import { Root, Header } from './styles'
import Heading from '../../components/Heading'
import IconButton from '../../components/IconButton'

const List = ({
  onNext,
  onPrevious,
  timestamp
}) => (
  <Root>
    <Header>
      <IconButton
        icon='chevron'
        onClick={onPrevious}
        rotate={180}
      />
      <Heading align='center'>
        {formatTimestamp(timestamp)}
      </Heading>
      <IconButton
        icon='chevron'
        onClick={onNext}
      />
  </Header>
  </Root>
)

export default List
