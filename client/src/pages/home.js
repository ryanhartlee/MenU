import React, { Component } from 'react';
import NavbarZ from '../components/navbar/navbar';
import LogoCard from '../components/logoCard/LogoCard';
import '../components/logoCard/LogoCard.css'
import starbucks from '../images/starbucks-logo.png'
import dutch from '../images/dutch-bros-logo.png'
import sonic from '../images/sonic-logo.png'

class Home extends Component {
    render() {
      return (
        <div>
            <NavbarZ />
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <LogoCard logo={starbucks} restaurant="/starbucks" />
                  </div>
                  <div className="col-sm">
                    <LogoCard logo={dutch} restaurant="/dutchbros" />
                   </div>
                   <div className="col-sm">
                    <LogoCard logo={sonic} restaurant="/sonic" />
                 </div>
                </div>
              </div>
        </div>

      );
    }
  }
  
  export default Home;