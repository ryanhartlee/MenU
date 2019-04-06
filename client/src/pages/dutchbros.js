import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';
import DrinkCard from '../components/drinkCard/drinkCard';


class DutchBros extends Component {
    render() {
      return (
        <div>
            <NavbarZ />
            <br />
            <Container >
                    <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
                </Container>
            </div>
      );
    }
  }
  
  export default DutchBros;