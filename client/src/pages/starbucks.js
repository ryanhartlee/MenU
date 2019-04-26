import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'react-materialize';
import StarbucksCard from '../components/starbucksCard/StarbucksCard';
import starbucks from "../starbucks.json";
import axios from "axios"


class Starbucks extends Component {

    state = {
    starbucks:starbucks,
    name: " ",
    description: " ",
    recipe: " ",
    image: " " || "https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg"
    };

    pullDrink = () => {

    }

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
