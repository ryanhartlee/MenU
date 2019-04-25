import React from 'react';
// import { Jumbotron, Button, CardImg } from 'reactstrap';


const UserJumbotron = (props) => {
  return (
    <div className='jumbotron container'>
        <img className="UserCardImage" src={props.userPic} alt={props.userName}></img>
        <div className="userJumbo">
          <h1>Welcome to MenU, {props.userName}</h1>
            <br />
               <h4 className="info">Below are your saved drinks and the ones you've created!</h4>
         </div>
         <br />
      </div>
  );
};

export default UserJumbotron;