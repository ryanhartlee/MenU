import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const DrinkCard = (props) => {
  return (
    <div>
      <Card className="drinkCard">
        <CardImg className="DrinkCardImage float-left" top width="100%" src="https://www.vicksdesign.com/products/tea-cup-hot-drink-java-coffee-cup-56-B1.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.drinkName}</CardTitle>
          <CardSubtitle>{props.drinkInfo}</CardSubtitle>
          <CardText>{props.drinkFlavor}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DrinkCard;