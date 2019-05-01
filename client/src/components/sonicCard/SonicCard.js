import React from "react";
import { Col } from "react-materialize";
import "./SonicCard.css";

const SonicCard = props => {
    console.log(props);
    return (
      <Col m={4} s={12}>
        <div className="card"><style>{'.card { background: #97a8d3; width:250%; height:450px;'}</style>
  
          
          <div className="card-image waves-effect waves-block waves-light"><style>{'.card { height:400px;'}</style><i className="material-icons right"></i>
            <img className="activator" src={props.image } alt={props.name} 
            />
  
          </div>
          <div className="card-content"><i class="far fa-heart"></i>
            <span className="card-title activator">
              <span className="sonic-names"> {props.name}</span>
            </span>
          </div>
          <div className="card-reveal">
            <div className="sonic-info">
              <div className="card-top">
                <div>
                  <span className="card-title"><span><i className="material-icons right">close</i></span>
                    <span className="sonic-name">{props.name}</span>
                  </span>
                </div>
                <div className="reveal-details">
                  <div className="detail-item row">
                    <span>Description:</span> <span>{props.description}</span>
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
  
  export default SonicCard;
  