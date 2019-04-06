import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Starbucks from './pages/starbucks';
import DutchBros from './pages/dutchbros';
import Sonic from './pages/sonic';
import UserProfile from './pages/userprofile';

class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/starbucks" component={Starbucks} />
          <Route exact path="/dutchbros" component={DutchBros} />
          <Route exact path="/sonic" component={Sonic} />
          <Route exact path="/user" component={UserProfile} />
        </Switch>
      </div>
      </Router> 
    );
  }
}

export default App;
