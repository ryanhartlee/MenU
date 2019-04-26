import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'react-materialize';
import DutchBrosCard from '../components/dutchbrosCard/DutchBrosCard';
import dutchbros from "../dutchbros.json";
import axios from "axios"


class DutchBros extends Component {

    state = {
        dutchbros:dutchbros,
        drinks: [],
        name: " ",
        description: " ",
        recipe: " ",
        image: " " || "https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg"
        };
    
        pullDrink = () => {
    
        axios.get ("/drinks/dutchbros").then(res => {
            console.log(res.data)
            // let drinks= res.data
            this.setState({drinks:res.data});
            console.log(this.state);
        
        });
        console.log("bacon");   }
        componentDidMount(){this.pullDrink()}
    

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
                            {this.state.drinks.map(drink => (
                      <Col m='3'>

                      <DutchBrosCard
                          key={drink.name}
                          id={drink.id}
                          name={drink.name}
                          image={"https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg"}
                          description={drink.description}
                          recipe={drink.recipe}
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