import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Game from './components/Game';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Tic Tac Toe</h1>
            <Link exact={true} to="/" className="menu-link" activeClassName="action">Game</Link>
            <Link exact={true} to="/about" className="menu-link" activeClassName="action">About</Link>
          </header>
          <Route exact path='/' component={Game} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
