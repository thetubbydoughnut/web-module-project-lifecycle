import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: '',
      completed: false,
      hideCompleted: false,
      toDo: ''
    }

  }
  
  componentDidMount() {
    console.log("componentDidMount");
      axios.get(URL)
      .then(res => {
        console.log("res -> ", res.data)
        this.setState({
          todos: res.data.data.map(item => ({
            id: item.id, name: item.name, completed: item.completed
          })),
          toDo: ''
        });
        console.log("Todos state", this.state.todos)
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.toDo.trim()) {
      axios.post(URL, {
        name: this.state.toDo,
        completed: this.state.completed
      })
      .then(res => {
        this.setState(prevState => ({
          todos: [...prevState.todos, res.data],
          name: ""
        }));
      })
      .catch(err => {
        console.error(err)
      })
    }
  }

  handleToggleComplete = (id) => {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
          )
          const UpdatedTodo = this.state.todos.find(todo => todo.id === id);
          axios.patch(`${URL}/${id}`, {
            completed: UpdatedTodo.completed
          })
          .catch(err => {
            console.error(err)
          });
          return {todos: updatedTodos}
      })
  }

  handleInputChange = (e) => {
    this.setState({ toDo: e.target.value})
  }

  toggleHideCompleted = () => {
    this.setState(prevState => ({ hideCompleted: !prevState.hideCompleted }), () => {
      console.log(this.state.hideCompleted)
    });
  }

  render() {
    return <>
      <div>
        <TodoList todos={this.state.todos} toggleComplete={this.handleToggleComplete} hideCompleted={this.state.hideCompleted}/>
        <Form handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} inputValue={this.state.toDo}/>
      </div>
        <button onClick={this.toggleHideCompleted}>
          {this.state.hideCompleted ? "Show" : "Hide"} Completed
        </button>
    </>
  }
}
