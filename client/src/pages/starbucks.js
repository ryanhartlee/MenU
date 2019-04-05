import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';

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