import React, { Component } from 'react'
import validate, * as validators from '../../lib/validate'
import { Root, Input } from './styles'
import IconButton from '../../components/IconButton'

class ListItemInput extends Component {
  handleEvent (type) {
    switch (type) {
      case 'focus':
        return () => this.inputField.focus()
      case 'submit':
        return (e) => {
          e.preventDefault()
          this.validate()
            .then((description) => this.props.onSuccess({
              description,
              id: this.props.id
            }))
            .then(() => this.inputField.value = '')
            .catch(() => window.alert('failure'))
        }
    }
  }

  validate () {
    const value = this.inputField.value.toLowerCase()
    const validations = [ validators.required() ]
    const validation = validate(validations, value)

    return validation
      ? Promise.reject(new Error(validation))
      : Promise.resolve(value)
  }

  render () {
    return (
      <Root onSubmit={this.handleEvent('submit')}>
        <IconButton
          icon='plus'
          onClick={this.handleEvent('focus')}
          size={0.25}
        />
        <Input
          innerRef={ref => this.inputField = ref}
          placeholder='Add item'
          type='text'
        />
      </Root>
    )
  }
}

export default ListItemInput
