/*
 * @Author: your name
 * @Date: 2021-08-26 21:32:20
 * @LastEditTime: 2021-08-26 21:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-组件开发\my-app\src\React实现slot插槽\App.js
 */
import React, { Component } from 'react'
import Nav from './Nav'
import Nav2 from './Nav2'
class App extends Component {
  render() {
    const leftJsx = <div>变量JSX</div>
    return (
      <div>
        <Nav
          left={leftJsx}
          main={<span>span行内</span>}
          right={<a href="http://www.baidu.com">百度一下</a>}
        />
        <Nav2 name="">
          <div>你好</div>
          <span>你不带我去</span>
          <span>李刚哈</span>
        </Nav2>
      </div>
    )
  }
}

export default App
