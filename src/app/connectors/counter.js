import React, {Component} from 'react'
import {connect} from 'core'
import {counter} from 'ducks/cart'

@connect(state => state.cart, {counter})
export default class Counter extends Component {
  render() {
    return <div>
      <p>{this.props.count} Things</p>
      <button onClick={e => this.props.counter()}>
        Increment
      </button>
    </div>
  }
}
