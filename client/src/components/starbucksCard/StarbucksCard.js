import React from "react";
import { Button, Card, Row, Col } from "react-materialize";
import "./StarbucksCard.css";



const StarbucksCard = props => {
  console.log(props);
  return (
    <Col m={6} s={12}>
      <div className="card"><style>{'.card { background: #1e3932; width:250%; height:450px;'}</style>

        
        <div className="card-image waves-effect waves-block waves-light"><style>{'.card { height:400px;'}</style>
          <img className="activator" src={props.image} alt={props.name} 
          />

        </div>
        <div className="card-content">
          <span className="card-title activator">
            <span className="starbucks-names"><style>{'.starbucks-names {color: white;'}</style>{props.name}</span>
          </span>
        </div>
        <div className="card-reveal">
          <div className="starbucks-info">
            <div className="card-top">
              <div>
                <span className="card-title"><span><i class="material-icons right">close</i></span>
                  <span className="starbucks-name">{props.name}</span>
                </span>
              </div>
              <div className="reveal-details">
                <div className="detail-item row">
                  <span><strong>Description:</strong></span> 
                 
                  <span>{props.description}</span>
                  
                </div>
                <div className="detail-item row">
                  <span><strong>Recipe:</strong></span>
                  <span>
                    <ul>
                      {props.recipe.map(ing => (
                        <li className="list">{ing}</li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
   </Col>
  );
};

export default StarbucksCard;
