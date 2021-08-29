/*
 * @Author: your name
 * @Date: 2021-08-22 21:59:50
 * @LastEditTime: 2021-08-23 22:25:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React学习\03-选项卡案例\my-app\src\App.js
 */
import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curIndex: 0,
    }
  }

  render() {
    console.log(this.props)
    const { title } = this.props
    return (
      <div>
        <ul className="nav-bar">
          {title.map((item, index) => {
            return (
              <li
                className={
                  this.state.curIndex === index
                    ? 'nav-bar-item active'
                    : 'nav-bar-item'
                }
                key={index}
                onClick={e => {
                  this.itemClick(index)
                }}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  itemClick(index) {
    console.log(index)
    this.setState({
      curIndex: index,
    })

    const { itemClick } = this.props
    itemClick(index)
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.title = ['精品', '潮流', '流行']
    this.state = {
      curTitle: '精品',
      curIndex: 0,
    }
  }
  render() {
    return (
      <div>
        <Table
          itemClick={index => {
            this.itemClick(index)
          }}
          title={this.title}
        />
        <h2>{this.state.curTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      curTitle: this.title[index],
    })
  }
}
