import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Starbucks from './pages/starbucks';
import DutchBros from './pages/dutchbros';
import Sonic from './pages/sonic';
import UserProfile from './pages/userprofile';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";


import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  console.log("token is here");
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded.userName);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render() {
    console.log("store" + store.getState().decoded)
    return (
      <Provider store={store}> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/starbucks" component={Starbucks} />
          <Route exact path="/dutchbros" component={DutchBros} />
          <Route exact path="/sonic" component={Sonic} />
          <Route exact path="/user" component={UserProfile} />
        </Switch>
      </Router> 
      </Provider>
    );
  }
}

export default App;
