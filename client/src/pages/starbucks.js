import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarZ from '../components/navbar/navbar';
import LogoCard from '../components/logoCard/LogoCard';

import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'reactstrap';
import StarbucksCard from '../components/starbucksCard/StarbucksCard';
import starbucks from "../starbucks.json";


class Starbucks extends Component {

    state = {
        starbucks
    };

    render() {
        return (
            <div>
                <NavbarZ />
                <Container>
                    <Row>
                            {this.state.starbucks.map(starbuck => (
                        <Col sm='3'>

                                <StarbucksCard
                                    key={starbuck.name}
                                    id={starbuck.id}
                                    name={starbuck.name}
                                    image={process.env.PUBLIC_URL + starbuck.image}
                                    description={starbuck.description}
                                    recipe={starbuck.recipe}
                                />
                                

                        </Col>
                            ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Starbucks;
