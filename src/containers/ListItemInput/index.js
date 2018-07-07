import React, { Component } from 'react'
import { Root, Input } from './styles'
import IconButton from '../../components/IconButton'

class ListItemInput extends Component {
  render () {
    return (
      <Root>
        <IconButton
          icon='check'
          size={0.25}
        />
        <Input
          type='text'
        />
      </Root>
    )
  }
}

export default ListItemInput
