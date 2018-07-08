import React from 'react'
import { connect } from 'react-redux'
import { addItem, deleteItem, toggleItem, selectItemsForDay } from '../../store/items'
import { formatTimestamp } from '../../lib/dates'

import { Root, Header } from './styles'
import Checkbox from '../../components/Checkbox'
import Heading from '../../components/Heading'
import IconButton from '../../components/IconButton'
import Layout from '../../components/Layout'
import ListItemInput from '../ListItemInput'

const List = ({
  addItem,
  deleteItem,
  items,
  onNext,
  onPrevious,
  timestamp,
  toggleItem
}) => (
  <Root>
    <Layout spacing={[ 1, 0, 1, 0 ]}>
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
        {items.map(item => (
          <Checkbox
            complete={item.complete}
            description={item.description}
            key={item.id}
            id={item.id}
            onDelete={() => deleteItem(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
        <ListItemInput
          onSuccess={addItem}
          timestamp={timestamp}
        />
      </div>
    </Layout>
  </Root>
)

const mapStateToProps = (state, props) => ({
  items: selectItemsForDay(state, props.timestamp)
})

const mapDispatchToProps = { addItem, deleteItem, toggleItem }

export default connect(mapStateToProps, mapDispatchToProps)(List)
