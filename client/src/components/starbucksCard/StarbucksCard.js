import React from "react";
// import { Button, Card, Row, Col } from "react-materialize";
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import FlipCard from 'react-flipcard';
import Flippy from 'react-flippy';
import "./StarbucksCard.css";
// import "./src/pages/starbucks.js"

const StarbucksCard = React.createClass({
  getInitialState() {
    return {
      isFlipped: false
    };
  },

  showBack() {
    this.setState({
      isFlipped: true
    });
  },

  showFront() {
    this.setState({
      isFlipped: false
    });
  },

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  },

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  },

  render() {
    return (
      <div>
        {/* Default behavior is horizontal flip on hover, or focus */}
        <FlipCard>
          {/* The first child is used as the front of the card */}
          <div>
            <div>Front</div>
            <div><small>(horizontal flip)</small></div>
          </div>
          {/* The second child is used as the back of the card */}
          <div>Back</div>
        </FlipCard>

        {/* The `type` attribute allows using a vertical flip */}
        <FlipCard type="vertical">
          <div>
            <div>Front</div>
            <div><small>(vertical flip)</small></div>
          </div>
          <div>Back</div>
        </FlipCard>

        {/*
          The `disabled` attribute allows turning off the auto-flip
          on hover, or focus. This allows manual control over flipping.

          The `flipped` attribute indicates whether to show the front,
          or the back, with `true` meaning show the back.
        */}
        <FlipCard
          disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
        >
          <div>
            <div>Front</div>
            <button type="button" onClick={this.showBack}>Show back</button>
            <div><small>(manual flip)</small></div>
          </div>
          <div>
            <div>Back</div>
            <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
          </div>
        </FlipCard>
      </div>
    );
  }
});

React.render(<StarbucksCard/>, document.getElementById('container'));


// const StarbucksCard = props => {
//   console.log(props);
//   return (
//     <Flippy m={6} s={12}>
//       <div className="card"><style>{'.card { background: #4545; width:250%; height:450px;'}</style>
        
//         <div className="card-image waves-effect waves-block waves-light; width:'200px'; height: '200px' ">
//           <img className="activator" src={props.image} alt={props.name} />

//         </div>
//         <div className="card-content">
//           <span className="card-title activator">
//             <span className="starbucks-name">{props.name}</span>
//           </span>
//         </div>
//         <div className="card-reveal">
//           <div className="starbucks-info">
//             <div className="card-top">
//               <div>
//                 <span className="card-title">
//                   <span className="starbucks-name">{props.name}</span>
//                 </span>
//               </div>
//               <div className="reveal-details">
//                 <div className="detail-item">
//                   <span>Description:</span> <span>{props.description}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span>Recipe:</span>{" "}
//                   <span>
//                     <ul>
//                       {props.recipe.map(ing => (
//                         <li>{ing}</li>
//                       ))}
//                     </ul>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//    </Flippy>
//   );
// };

export default StarbucksCard;
