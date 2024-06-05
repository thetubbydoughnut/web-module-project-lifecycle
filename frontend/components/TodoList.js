import React from 'react';
import Todo from './Todo'


export default class TodoList extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos || prevProps.hideCompleted !== this.props.hideCompleted)
      {
        console.log(this.props.todos, this.props.hideCompleted)
    }
  }

  render() {
    const todos = this.props.hideCompleted 
    ? this.props.todos.filter(todo => !todo.completed) : this.props.todos;

    console.log('Filtered Todos',todos)

    return (
      <div>
      <h1>Todos:</h1>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} toggleComplete={this.props.toggleComplete}/> 
      ))}
      </div>
    )
  }
}
