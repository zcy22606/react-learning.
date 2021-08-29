/*
 * @Author: your name
 * @Date: 2021-08-26 21:34:41
 * @LastEditTime: 2021-08-26 21:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-组件开发\my-app\src\React实现slot插槽\naV02.JS
 */
/*
 * @Author: your name
 * @Date: 2021-08-26 21:42:48
 * @LastEditTime: 2021-08-26 21:43:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-组件开发\my-app\src\React实现slot插槽\Nav.js
 */
import React, { Component } from 'react'

class Nav2 extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="left">{this.props.children[0]}</div>
        <div className="main">{this.props.children[1]}</div>
        <div className="right">{this.props.children[2]}</div>
      </div>
    )
  }
}

export default Nav2
