import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';
import starbucks from '../images/starbucks-logo.png'
import dutch from '../images/dutch-bros-logo.png'
import sonic from '../images/sonic-logo.png'

class Starbucks extends Component {
    render() {
      return (
        <div>
            <NavbarZ />
            <Container >
                <Row>
                <h1>YEET</h1>
                </Row>
                </Container>
            </div>
        

      );
    }
  }
  
  export default Starbucks;