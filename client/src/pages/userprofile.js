import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import UserJumbotron from '../components/user-components/profileJumbotron'
import UserTabs from '../components/user-components/pageTabs'
import '../components/user-components/userprofile.css';


class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: 'Test User',
            userPic: 'https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png'

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