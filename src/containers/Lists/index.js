import React, { Component } from 'react'
import findIndex from 'lodash/findIndex'
import { connect } from 'react-redux'

import List from '../List'
import Swipe from 'react-swipe'

class Lists extends Component {
  constructor (props) {
    super(props)
    this.state = {
      swipeOptions: {
        continuous: false,
        startSlide: findIndex(props.days, day => day.default)
      }
    }
  }

  handleEvent (type) {
    switch (type) {
      case 'prev':
        return () => this.swipe.prev()
      case 'next':
        return () => this.swipe.next()
    }
  }

  render () {
    const { days } = this.props
    const { swipeOptions } = this.state

    return (
      <Swipe
        ref={ref => this.swipe = ref}
        swipeOptions={swipeOptions}>
        {days.map((day, index) => (
          <div key={index}>
            <List
              timestamp={day.timestamp}
              onNext={this.handleEvent('next')}
              onPrevious={this.handleEvent('prev')}
            />
          </div>
        ))}
      </Swipe>
    )
  }
}

const mapStateToProps = (state) => ({
  days: state.days
})

export default connect(mapStateToProps)(Lists)
