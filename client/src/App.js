import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Starbucks from './pages/starbucks'
import NavBarZZ from './components/navbar/navbar'

class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/starbucks" component={Starbucks} />
        </Switch>
      </div>
      </Router> 
    );
  }
}

export default App;
