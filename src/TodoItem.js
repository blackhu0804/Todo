import React, { Component } from 'react';
import 'normalize.css'
import './TodoItem.css'

export default class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox" checked={this.props.todo.status === 'completed'}
          onChange={this.toggle.bind(this)} />
        <span className="title">{this.props.todo.title}</span>
        <a className="iconfont icon-delete" onClick={this.delete.bind(this)}>  </a>
      </div>
    )
  }

  toggle(e){
    this.props.onToggle(e, this.props.todo)
  }
  delete(e) {
    this.props.onDelete(e, this.props.todo)
    // console.log("delete")
  }
}