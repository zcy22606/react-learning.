/*
 * @Author: your name
 * @Date: 2021-08-21 15:46:54
 * @LastEditTime: 2021-08-23 21:19:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\02-react组件开发\learn_component\src\App.js
 */
import { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: ['潮流', '精品', '流行'],
    }
  }
  render() {
    return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}
