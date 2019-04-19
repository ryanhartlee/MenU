import React from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import "./StarbucksCard.css"


const StarbucksCard = props => {
  console.log(props)
  return (



 <Card className="StarbucksCard">
  

    <div className="container">
      <style>{'body { background-color: #174; }'}</style>
<div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.image} />
 </div>
       <div className="card-content">
         <span className="card-title activator">{props.name}<i className="material-icons right">more_vert</i>

     </span>
       </div>

       <div className="card-reveal">
<div>
         <span className="card-title">{props.name}<i className="material-icons right">close</i>
          
          </span>
          </div>
         
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
    </div>
  
  </Card>  
  



  );
}; 





    



export default StarbucksCard;