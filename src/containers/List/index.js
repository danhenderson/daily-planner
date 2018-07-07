import React from 'react'
import { connect } from 'react-redux'
import { addItem, selectItemsForDay } from '../../store/items'
import { formatTimestamp } from '../../lib/dates'

import { Root, Header } from './styles'
import Checkbox from '../../components/Checkbox'
import Heading from '../../components/Heading'
import IconButton from '../../components/IconButton'
import Layout from '../../components/Layout'
import ListItemInput from '../ListItemInput'

const List = ({
  addItem,
  items,
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
        {items.map((item, index) => (
          <Checkbox
            completed
            key={index}
          />
        ))}
        <ListItemInput
          id={timestamp}
          onSuccess={addItem}
        />
      </div>
    </Layout>
  </Root>
)

const mapStateToProps = (state, props) => ({
  items: selectItemsForDay(state, props.timestamp)
})

const mapDispatchToProps = { addItem }

export default connect(mapStateToProps, mapDispatchToProps)(List)
