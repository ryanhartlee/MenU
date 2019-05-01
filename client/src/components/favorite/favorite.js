import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class MysteryComponent extends React.Component {
    state = {
      className: 'heart'
    }
  
    toggleClass = (e) => {
      if (this.state.className === 'heart') {
        this.setState({ className: 'clicked' })
      } else if (this.state.className === 'clicked') {
        this.setState({ className: 'heart' })
      }
    }
  
    render() {
      return (
        <div className={this.state.className}>
          <FontAwesomeIcon onClick={this.toggleClass} size={"sm"} />
        </div>
      )
    }
  }

  export default MysteryComponent
  