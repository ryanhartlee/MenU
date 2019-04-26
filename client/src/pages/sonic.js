import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'react-materialize';
import SonicCard from '../components/sonicCard/SonicCard';
import sonic from "../sonic.json";


class Sonic extends Component {

    state = {
        sonic
    };

    render() {
        return (
            
            <div>
                <NavbarZ />
                <Container>
                    <Row>
                            {this.state.sonic.map(sonic => (
                        <Col m='3'>

                                <SonicCard
                                    key={sonic.name}
                                    id={sonic.id}
                                    name={sonic.name}
                                    image={process.env.PUBLIC_URL + sonic.image}
                                    description={sonic.description}
                                    recipe={sonic.recipe}
                                />
                                

                        </Col>
                            ))}
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default Sonic;