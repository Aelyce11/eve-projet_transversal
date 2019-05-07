import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import Blog from './Components/Blog'
import Header from './Components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/header" component={Header} />
      </Router>
      
    );
  }
}

export default App;
