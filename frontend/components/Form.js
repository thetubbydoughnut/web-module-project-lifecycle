import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.updateTodoList}>
        <input placeholder='Type todo'
        onChange={this.props.handleInputChange}
        value={this.props.inputValue}
        />   
      </form>
    )
  }
}
