import './index.css'
import React from 'react'
class Roll extends React.Component{

  
    state = {
      list: [
        { title: '这是消息1' },
        { title: '这是消息2' },
        { title: '这是消息3' },
        { title: '这是消息4' },
        { title: '这是消息5' },
        { title: '这是消息6' },
        { title: '这是消息7' },
        { title: '这是消息8' },
        { title: '这是消息9' },
      ],
      count: 0,
 }

  // 页面挂载时开启定时器
  componentDidMount = () => {
    this.begin()
  }

  // 定时器
  begin = () => {
    this.timer = setInterval(() => {
      this.Roll()
    }, 10);
  }

  // 关闭定时器
  stop = () => {
    clearInterval(this.timer)
  }

  // 每次向上偏移0.5px，使用state储存偏移的次数
  Roll = () => {
    this.setState({
      count: this.state.count+1
    })
    this.refs.roll.style.top = -0.5*this.state.count+'px';
    // 当偏移量达到40px时，将数组中第一个数据剪切到数组的最后，再减去一行高度对应的偏移次数
    if(-0.5*this.state.count <= -40){
      let arr = this.state.list;
      arr.push(this.state.list[0])
      arr.splice(0,1);
      this.setState({
        list: arr,
        count: this.state.count - 50,
      })
      this.refs.roll.style.top = (this.state.count*(-0.5)) + 'px'
    }
  }

  render(){
    return (
      <div className="box" onMouseEnter={this.stop} onMouseLeave={this.begin}>
        <div className="content" ref='roll'>
          {this.state.list.map((item,index)=>{
            return (
              <p className='row' key={index}>
                <a href="#">
                  {item.title}
                </a>
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Roll