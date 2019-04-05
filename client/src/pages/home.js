import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarZ from '../components/navbar/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';
import starbucks from '../images/starbucks-logo.png'
import dutch from '../images/dutch-bros-logo.png'
import sonic from '../images/sonic-logo.png'



class Home extends Component {
    render() {
      return (
        <div>
            <NavbarZ />
            <Container >
                <Row>
                <Col sm="4" > 
                 <LogoCard logo={starbucks} restaurant="/starbucks" />
                 </Col>
                 <Col sm="4" >
                 <LogoCard logo={dutch} restaurant="dutchbros" />
                 </Col>
                 <Col sm="4" >
                 <LogoCard logo={sonic} restaurant="sonic" />
                 </Col>
                </Row>
                </Container>
            </div>
        

      );
    }
  }
  
  export default Home;