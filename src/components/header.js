import React from 'react';
import {BrowserRouter as  Router, Route, Link} from 'react-router-dom';


export default class Header extends React.Component {
  render() {
    return (
      <div>
    <h1> The FairyGodBoss Message Board </h1>
      <Link to ="/todoInput"> Create a Post </Link>
    </div>
  )
  }
}
