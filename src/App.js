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
            <Link to="/" className="menu-link" activeclassname="action">Game</Link>
            <Link to="/about" className="menu-link" activeclassname="action">About</Link>
          </header>
          <Route path='/about' component={About} />
          <Route exact path='/' component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
