import React, { Component } from 'react'
import validate, * as validators from '../../lib/validate'
import { connect } from 'react-redux'
import { addTag, selectTagNames } from '../../store/tags'

import { Root, Background, Button, Form, Input } from './styles'
import Icon from '../../components/Icon'

class TagForm extends Component {
  constructor () {
    super()
    this.state = {
      active: false,
      tempTheme: null
    }
  }

  handleEvent (type) {
    const { addTag } = this.props

    switch (type) {
      case 'activate':
        return () => this.setState({ active: true }, () => this.inputField.focus())
      case 'deactivate':
        return () => this.setState({ active: false })
      case 'submit':
        return (e) => {
          e.preventDefault()
          this.validate()
            .then((tag) => addTag(tag))
            .then(() => this.setTempTheme('success'))
            .then(() => this.inputField.value = '')
            .catch(() => this.setTempTheme('danger'))
        }
    }
  }

  setTempTheme (tempTheme) {
    return new Promise(resolve => (
      this.setState({ tempTheme }, () => {
        setTimeout(() => {
          this.setState({ tempTheme: null })
          resolve()
        }, 250)
      })
    ))
  }

  validate () {
    const value = this.inputField.value.toLowerCase()
    const validations = [
      validators.required(),
      validators.hashtag(),
      validators.unique(this.props.tagNames)
    ]
    const validation = validate(validations, value)

    return validation
      ? Promise.reject(new Error(validation))
      : Promise.resolve(value)
  }

  render () {
    const { active, tempTheme } = this.state

    return (
      <Root>
        <Background
          active={active}
          tempTheme={tempTheme}>
          <Form
            active={active}
            onSubmit={this.handleEvent('submit')}>
            <Icon
              name='hash'
              size={0.5}
            />
            <Input
              innerRef={ref => this.inputField = ref}
              type='text'
            />
          </Form>
          <Button onClick={this.handleEvent(active ? 'deactivate' : 'activate')}>
            <Icon
              name={active ? 'minus' : 'plus'}
              size={0.5}
            />
          </Button>
        </Background>
      </Root>
    )
  }
}

const mapStateToProps = state => ({
  tagNames: selectTagNames(state)
})

const mapDispatchToProps = { addTag }

export default connect(mapStateToProps, mapDispatchToProps)(TagForm)
