import React, { Component } from 'react'

class ErrorBoundary extends Component {
  componentDidCatch (error) {
    console.log(error)
  }

  render () {
    return this.props.children
  }
}

export default ErrorBoundary
