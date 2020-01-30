import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home';
import { AuthenticatedRoute, NotAuthenticatedRoute } from './components/AuthenticationRoute'
import './App.css';

class App extends Component {
  render() {
    debugger
    return (
      <div className="App">
        <Switch>
          <AuthenticatedRoute exact path="/home" component={Home}/>
          <NotAuthenticatedRoute exact path="/login" component={Login}/>
          <Redirect to="/home"/>
        </Switch>
      </div>
    );
  }
}

export default App;
