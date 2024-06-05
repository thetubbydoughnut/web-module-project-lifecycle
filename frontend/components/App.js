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
      completed: false
    }

  }
  
  componentDidMount() {
    console.log("componentDidMount");
      axios.get(URL)
      .then(res => {
        console.log("res -> ", res.data)
        this.setState({
          todos: res.data.data.map(item => ({
            id: item.id, name: item.name, completed: false
          })),
          toDo: ''
        });
        console.log("Todos state", this.state.todos)
      })
      .catch(err => {
        console.error(err)
      })
  }

  
  render() {
    return <>
      <div>
      <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      <Form updateToDoList={this.updateToDoList} handleInputChange={this.handleInputChange} inputValue={this.state.toDo}/>

      </div>
    </>
  }
}
