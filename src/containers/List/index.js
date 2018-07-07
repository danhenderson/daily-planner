import React from 'react'
import { formatTimestamp } from '../../lib/dates'
import { Root, Header } from './styles'

import Checkbox from '../../components/Checkbox'
import Heading from '../../components/Heading'
import IconButton from '../../components/IconButton'
import Layout from '../../components/Layout'
import ListItemInput from '../ListItemInput'

const List = ({
  onNext,
  onPrevious,
  timestamp
}) => (
  <Root>
    <Layout spacing={1}>
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
      <div>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <ListItemInput />
      </div>
    </Layout>
  </Root>
)

export default List
