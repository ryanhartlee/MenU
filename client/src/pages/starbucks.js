import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarZ from '../components/navbar/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';
import purpleDrink from "../images/Pink-Purple-Drink.jpg"
import StarbucksCard from '../components/starbucksCard/StarbucksCard';


class Starbucks extends Component {
    render(){
        return (
            <div>
                <NavbarZ />
                <Container>
                <Row>
                <Col sm="4">
                <StarbucksCard logo ={purpleDrink}  />
                </Col>


                </Row>
                </Container>



            </div>
        )
    }
}

export default Starbucks;