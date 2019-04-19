import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css';
import UserJumbotron from '../components/user-components/profileJumbotron';
import UserTabs from '../components/user-components/pageTabs';
import '../components/user-components/userprofile.css';
import store from '../store';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: 'Shrek',
            userPic: 'https://pbs.twimg.com/profile_images/806269452/shrekav_400x400.png'
        }
    }
    
    render() {
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