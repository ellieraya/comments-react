import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TodoInput  from'./components/todoInput';
import TodoItem  from'./components/todoItem';
import {BrowserRouter as  Router, Route, Link } from 'react-router-dom';

const AppPath  = () => (
      <Router>
        <div>
          <Route exact path="/" component={Header}/>
          <Route exact path="/todoInput" component={TodoInput}/>
          <Route exact path="/todoItem" component={TodoItem}/>
        </div>
      </Router>
    )
class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      todos: [
      ],
      nextId: 3
      }
      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
}
      addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
          todos: todos,
          nextId: ++this.state.nextId
        })
      }
      removeTodo(id) {
        this.setState({
          todos: this.state.todos.filter((todo, index)=> todo.id !== id)
        })
      }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
        const Home  = () => (
          <div className="container">
            <Header />

          </div>
        )
        const TodoInput  = () => (<TodoInput todoText="" addTodo={this.addTodo}/>)
        const TodoItem  = () => (<ul>
        {
          this.state.todos.map((todo) => {
            return < TodoItem todo={todo} key={todo.id} id= {todo.id} removeTodo={this.removeTodo}/>
          })
        }
        </ul>
      )
        </div>
      </div>
    );
  }
}

export default AppPath
