import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarZ from '../components/NavBar/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';


class Home extends Component {
    render() {
      return (
        <div>
            <NavbarZ />
            <Container >
                <Row>
                <Col sm="4" > 
                 <LogoCard logo="http://www.artitudesdesign.com/wp-content/uploads/2017/02/starbucks_featured_image-1.jpg" restaurant="starbucks" />
                 </Col>
                 <Col sm="4" >
                 <LogoCard logo="https://www.logolynx.com/images/logolynx/11/111ad0b1eecd2e03a62d9723b2e10be0.jpeg" restaurant="dutchbros" />
                 </Col>
                 <Col sm="4" >
                 <LogoCard logo="https://www.staleyinc.com/wp-content/uploads/2017/10/Sonic-Logo-official.jpg" restaurant="sonic" />
                 </Col>
                </Row>
                </Container>
            </div>
        

      );
    }
  }
  
  export default Home;