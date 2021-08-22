/*
 * @Author: your name
 * @Date: 2021-08-22 21:59:50
 * @LastEditTime: 2021-08-22 23:48:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-选项卡案例\my-app\src\App.js
 */
import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    )
  }
}
