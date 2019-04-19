import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'react-materialize';
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
                        <Col m='3'>

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
