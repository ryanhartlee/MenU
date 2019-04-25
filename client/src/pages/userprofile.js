import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css';
import UserJumbotron from '../components/user-components/profileJumbotron';
import UserTabs from '../components/user-components/pageTabs';
import '../components/user-components/userprofile.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
// import { Provider } from "react-redux";
import store from "../store";
// import { connect } from 'react-redux';



if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  console.log("token is here2");
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded);
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

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        // if (localStorage.jwtToken) {
        //   // Set auth token header auth
        //   const token = localStorage.jwtToken;
        //   setAuthToken(token);
        //   console.log("token is here2");
        //   // Decode token and get user info and exp
        //   const decoded = jwt_decode(token);
        //   console.log(decoded);
        //   // Set user and isAuthenticated
        //   store.dispatch(setCurrentUser(decoded));
        // }
        
        this.state = {
            userName: store.getState().auth.user.userName,
            userPic: 'https://pbs.twimg.com/profile_images/806269452/shrekav_400x400.png'
        }
        // store.subscribe(() => {
        //   // When state will be updated(in our case, when items will be fetched), 
        //   // we will update local component state and force component to rerender 
        //   // with new data.
        //   // store.getState()
    
        //   this.setState({
        //     userName: store.state
        //   });
        // });
    }

    
    getstate = () => {
      console.log("yooo", store.getState().auth.user.userName);
    }
    
    render() {
      this.getstate()
      return (
        <div>
            <NavbarZ />
              <div className="container">
                <UserJumbotron userName={this.state.userName} userPic={this.state.userPic} />
              </div>
              <div className="container">
              <UserTabs />
              </div>
        </div>
      );
    }
  }
  
  export default Home;