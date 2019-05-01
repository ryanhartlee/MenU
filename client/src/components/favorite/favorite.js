import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Example extends React.Component{
    state = {
        clicked: false
    }

    handleOnCLick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){

        var clicked = this.state.clicked

        return(
        <button onClick={this.handleOnClick}>
            <i
                class={ clicked ? "fas fa-heart" : "fas fa-circle"}
            />
        </button>

        )
    }
}

export default Example
  