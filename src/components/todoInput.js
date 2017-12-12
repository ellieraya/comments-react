import React from 'react';
import './todoInput.css';
import {BrowserRouter as  Router, Route, Link} from 'react-router-dom';

export default class TodoInput extends React.Component {
  constructor(props){
    super(props)

      this.state={value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.addTodo = this.addTodo.bind(this);
    }

      handleChange(e){
      this.setState({value: e.target.value});
      }

      addTodo(todo) {
      if (todo.length > 0) {
        this.props.addTodo(todo);
        this.setState({value:''});
      }
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Link to ="/todoItem"><button className="btn"> Write a Comments</button> </Link>
      </div>
    )
  }
}
