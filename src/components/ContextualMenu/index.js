import React, { Component } from 'react'
import { Root, Close, Menu, MenuItem, MenuWrapper } from './styles'
import Box from '../Box'
import Heading from '../Heading'
import IconButton from '../IconButton'

class ContextualMenu extends Component {
  constructor () {
    super()
    this.state = { open: false }
  }

  handleEvent (type) {
    switch (type) {
      case 'open':
        return () => this.setState({ open: true })
      case 'close':
        return () => this.setState({ open: false })
    }
  }

  render () {
    const {
      items,
      title
    } = this.props

    return (
      <Root>
        <IconButton
          icon='cog'
          onClick={this.handleEvent('open')}
        />
        {this.state.open && (
          <MenuWrapper>
            <Menu>
              <Close>
                <IconButton
                  icon='close'
                  onClick={this.handleEvent('close')}
                />
              </Close>
              <Box spacing={[ 0, 0, 1, 0 ]}>
                <Heading align='center'>{title}</Heading>
              </Box>
              {items.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={item.onClick}>
                  <div>{item.label}</div>
                  <IconButton icon={item.icon} />
                </MenuItem>
              ))}
            </Menu>
          </MenuWrapper>
        )}
      </Root>
    )
  }
}

export default ContextualMenu
