/*
 * @Author: your name
 * @Date: 2021-08-21 15:46:54
 * @LastEditTime: 2021-08-22 20:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\02-react组件开发\learn_component\src\App.js
 */
import {Component} from "react"

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      title:"你好周杰伦"
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</ h1>
      </div>
    )
  }
}