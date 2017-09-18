import React, { Component } from 'react';
import 'normalize.css'

export default class TodoItem extends Component {
  render() {
    return <div>{this.props.todo.title}</div>
  }
}