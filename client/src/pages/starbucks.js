import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarZ from '../components/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';


class Starbucks extends Component {
    render(){
        return (
            <div>
                <NavbarZ />
                <Container>
                <Row>
                <Col sm="4">

                </Col>


                </Row>
                </Container>



            </div>
        )
    }
}