import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input placeholder='Type todo'
        onChange={this.props.handleInputChange}
        value={this.props.inputValue}
        />
        <button type='submit'>Submit</button>   
      </form>
    )
  }
}
