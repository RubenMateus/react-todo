import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration : this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {title}
          <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: '#61B5A8',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right'
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}

export default TodoItem;
