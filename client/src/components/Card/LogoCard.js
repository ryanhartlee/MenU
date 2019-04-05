import React from 'react';
import { Card, CardImg } from 'reactstrap';


const LogoCard = (props) => {
  return (
    <div> 
        <Card className="LogoCard">
            <a href={props.restaurant}>
                <CardImg className="LogoCardImage" top width="100%" src={props.logo} alt="Card image cap" />
             </a>
        </Card>
    </div>
  );
};

export default LogoCard;