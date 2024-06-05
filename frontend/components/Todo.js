import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        {this.props.name && (
          <input type='checkbox' checked={this.props.completed}
          onChange={() => this.props.toggleComplete(this.props.id)} 
          />
        )}
        {this.props.name}
      </div>
    )
  }
}
