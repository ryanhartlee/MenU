import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'react-materialize';
import DutchBrosCard from '../components/dutchbrosCard/DutchBrosCard';
import dutchbros from "../dutchbros.json";


class DutchBros extends Component {

    state = {
        dutchbros
    };

    render() {
        return (
            
            <div>
                <NavbarZ />
                <Container>
                    <Row>
                            {this.state.dutchbros.map(dutchbros => (
                        <Col m='3'>

                                <DutchBrosCard
                                    key={dutchbros.name}
                                    id={dutchbros.id}
                                    name={dutchbros.name}
                                    image={process.env.PUBLIC_URL + dutchbros.image}
                                    description={dutchbros.description}
                                    recipe={dutchbros.recipe}
                                />
                                

                        </Col>
                            ))}
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default DutchBros;