import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super (props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render(){
    return(
      <div className="todoWrapper">
        <p>{this.props.todoInput}</p><button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button>
      </div>
    )
  }
}
