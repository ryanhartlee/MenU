import React from 'react';
import { Card, CardImg, Row } from 'reactstrap';
import "./StarbucksCard.css"


const StarbucksCard = props => {
  console.log(props)
  return (
<div>
    <Card className="StarbucksCard">
      {/* <div className="img-container"> */}
        <img className="starbPic" alt={props.name} src={props.image} />
      {/* </div> */}
      <div className="container">
      <style>{'body { background-color: #174; }'}</style>
            
        <ul>
          <Row>
            <strong>Name:</strong> {props.name}
          </Row>
          <Row>
            <strong>Description:</strong> {props.description}
          </Row>

          <Row>
            <strong>Recipe:</strong>
          </Row>
          <Row>

            <ul>
              {props.recipe.map((ing) =>

                <li>
                  {ing}
                </li>

              )}
            </ul>
          </Row>
        </ul>
      </div>
    </Card>
    </div>


  );
};

export default StarbucksCard;