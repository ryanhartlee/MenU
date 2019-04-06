import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';


class App extends Component {
  render() {
    return (
      <div>
        <Home /> 
      </div>
    );
  }
}

export default App;
