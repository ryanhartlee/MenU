import React from 'react';
import { Card, CardImg } from 'reactstrap';
import "./StarbucksCard.css"


const StarbucksCard = (props) => {
  return (
    <div> 
        <Card className="StarbucksCard">
            <a href={props.starbucks}>
                <CardImg className="StarbucksCardImage" top width="100%" src={props.logo} alt="Card image cap" />
             </a>
        </Card>
    </div>
  );
};

export default StarbucksCard;