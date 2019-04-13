import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import '../components/logoCard/LogoCard.css'
import DrinkCard from '../components/drinkCard/drinkCard';


class DutchBros extends Component {
    render() {
      return (
        <div>
            <NavbarZ />
            <br />
            <div className="container">
            <style>{'body { background-color: #06a; }'}</style>
                    <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
                </div>
            </div>
      );
    }
  }
  
  export default DutchBros;