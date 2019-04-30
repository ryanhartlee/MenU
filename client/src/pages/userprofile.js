import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css';
import UserJumbotron from '../components/user-components/profileJumbotron';
import UserTabs from '../components/user-components/pageTabs';
import '../components/user-components/userprofile.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DrinkCard from '../components/drinkCard/drinkCard'
import StarbucksCard from '../components/starbucksCard/StarbucksCard'
import { Col } from 'react-materialize';

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userName: store.getState().auth.user.userName,
            userPic: 'https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png',
            userCreatedDrinks: [],
            userSavedDrinks: []
        }
    }

    getUserCreatedDrinks = (user) => {
      axios.get("/drinks/user/" + user ).then(res => {
        console.log(res.data)
        // let drinks= res.data
        this.setState({userCreatedDrinks: res.data});
        console.log(this.state.userCreatedDrinks)
    });
    };
    componentDidMount() {
      this.getUserCreatedDrinks(store.getState().auth.user.userName);
    };

    render() {
      return (
        <div>
            <NavbarZ />
              <div className="container">
                <UserJumbotron userName={this.state.userName} userPic={this.state.userPic} />
              </div>
              <div className="container">
              <Tabs>
              <br></br>
            <TabList>
              <Tab>Your Created Drinks</Tab>
              <Tab>Saved Drinks</Tab>
            </TabList>

            <TabPanel>
              <div className="row">
              <Col m='3'>
            {this.state.userCreatedDrinks.map(drink => (
              <StarbucksCard
                  key={drink.name}
                  id={drink.id}
                  name={drink.name}
                  image={process.env.PUBLIC_URL + drink.image}
                  description={drink.description}
                  recipe={drink.recipe}
              />
                ))}
              </Col>
              </div>
            </TabPanel>
            <TabPanel>
              <DrinkCard drinkName="Coming Soon" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
              
            </TabPanel>
            </Tabs>
              </div>
        </div>
      );
    }
  }
  
  export default Home;