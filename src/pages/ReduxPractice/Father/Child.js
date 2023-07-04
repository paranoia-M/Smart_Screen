import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(94,this.props);

  }
  render() {
    return (
      <div>
        <h2>Child</h2>
        <div>{ this.props.count}</div>
        <div>{ this.props.newState}</div>
      </div>
    )
  }
}
