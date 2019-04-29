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
        drinks: [],
        name: " ",
        description: " ",
        recipe: [],
        image: " " || "https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg",
        favorites: []
    };

   

    pullDrink = () => {
    axios.get ("/drinks/starbucks").then(res => {

        console.log('HELLOOOOOOOOOOO')
        console.log(res.data)
        // let drinks= res.data
        this.setState({drinks:res.data})
    
    });
    
    
    }


    componentDidMount(){this.pullDrink()}
    
    render() {

       
        return (
            
            <div>
                <NavbarZ />
                <Container>
                    <Row>
                   <Col m='3'>

               
                   
                    {this.state.starbucks.map(starbuck => (
                    
                       

                                <StarbucksCard
                                
                                    key={starbuck.name}
                                    id={starbuck.id}
                                    name={starbuck.name}
                                    image={process.env.PUBLIC_URL + starbuck.image}
                                    description={starbuck.description}
                                    recipe={starbuck.recipe}
                                />
                                

                      
                            ))}
                            {this.state.drinks.map(drink => (
                               
                      

                                <StarbucksCard
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



export default Starbucks;
