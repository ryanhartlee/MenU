import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import { Container, Row, Col } from 'react-materialize';
import SonicCard from '../components/sonicCard/SonicCard';
import sonic from "../sonic.json";
import axios from "axios"


class Sonic extends Component {

    state = {
        sonic:sonic,
        drinks: [],
    name: " ",
    description: " ",
    recipe: " ",
    image: " " || "https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg"
    };

    pullDrink = () => {

        axios.get ("/drinks/sonic").then(res => {
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
                    <Col m='3'>
                           {this.state.sonic.map(sonic => (
                        

                                <SonicCard
                                    key={sonic.name}
                                    id={sonic.id}
                                    name={sonic.name}
                                    image={process.env.PUBLIC_URL + sonic.image}
                                    description={sonic.description}
                                    recipe={sonic.recipe}
                                />
                                

                        
                            ))}
                             {this.state.drinks.map(drink => (
                      

                      <SonicCard
                          key={drink.name}
                          id={drink.id}
                          name={drink.name}
                          image={"https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg"}
                          description={drink.description}
                          recipe={drink.recipe}
                      />
                      
                       
             
                  ))}
                   </Col>
                     </Row>
                </Container>
            </div>
            
        )
    }
}

export default Sonic;