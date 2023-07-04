import React, { Component } from 'react'
import Child from './Child'
import { Button } from 'antd'

export default class index extends Component {

  constructor() {
    super()
    this.state = {
      count: 1,
      newState:[1,2,3,4]
    }
    this.handleClickIncrease = this.handleClickIncrease.bind(this)
    this.handleClickReduce = this.handleClickReduce.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleClickIncrease() {
    this.setState({
      count:this.state.count+1
    })
  }
  handleClickReduce() {
    this.setState({
      count:this.state.count -1 
    })
  }
  handleChange() {
    this.setState({
     newState:[6,7,8,9]
    })
  }
  handleChange2() {
    this.setState({
     newState:[55,44,33,22]
    })
  }
  render() {
    return (
      <div>
        <h1>father</h1>
        <Child count={this.state.count} newState={this.state.newState}></Child>
        <Button onClick={this.handleClickIncrease}>父组件增加</Button>
        <Button onClick={this.handleClickReduce}>父组件减少</Button>
        <Button onClick={this.handleChange}>父组件改变1</Button>
        <Button onClick={this.handleChange2}>父组件改变2</Button>
      </div>
    )
  }
}
