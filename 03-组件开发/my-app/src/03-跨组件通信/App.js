/*
 * @Author: your name
 * @Date: 2021-08-26 21:59:15
 * @LastEditTime: 2021-08-29 20:19:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-组件开发\my-app\src\跨组件通信\App.js
 */
import React, { Component } from 'react'

class Cp1 extends Component {
  render() {
    return (
      <div>
        <div>昵称：{this.props.name}</div>
        <div>等级:{this.props.level}</div>
      </div>
    )
  }
}

class Cp2 extends Component {
  render() {
    return (
      <div>
        <Cp1 {...this.props} />
      </div>
    )
  }
}

class App extends Component {
  state = {
    name: '李白',
    level: 99,
  }

  render() {
    return (
      <div>
        <Cp2 {...this.state} />
      </div>
    )
  }
}

export default App
