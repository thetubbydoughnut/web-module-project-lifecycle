import React from 'react';
import Todo from './Todo'


export default class TodoList extends React.Component {
  render() {
    const todos = this.props.hideCompleted 
    ? this.props.todos.filter(todo => !todo.completed) : this.props.todos;
    return (
      <div>
      <h1>Todos:</h1>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} {...todo} toggleComplete={this.props.toggleComplete}/> 
      ))}
      </div>
    )
  }
}
