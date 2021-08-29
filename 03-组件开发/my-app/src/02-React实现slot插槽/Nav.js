/*
 * @Author: your name
 * @Date: 2021-08-26 21:42:48
 * @LastEditTime: 2021-08-26 21:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-组件开发\my-app\src\React实现slot插槽\Nav.js
 */
import React, { Component } from 'react'

class Nav extends Component {
  render() {
    const { left, main, right } = this.props
    return (
      <div className="nav-bar">
        <div className="left">{left}</div>
        <div className="main">{main}</div>
        <div className="right">{right}</div>
      </div>
    )
  }
}

export default Nav
