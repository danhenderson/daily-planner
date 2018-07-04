import React from 'react'
import { connect } from 'react-redux'
import { selectTags } from '../../store/tags'

import InlineList from '../../components/InlineList'
import Tag from '../../components/Tag'

const TagList = ({ tags = [] }) => (
  <InlineList size='sm'>
    {tags.map((tag) => (
      <Tag
        key={tag.id}
        name={tag.name}
      />
    ))}
  </InlineList>
)

const mapStateToProps = state => ({
  tags: selectTags(state)
})

export default connect(mapStateToProps)(TagList)
