import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreateDrinkForm from '../forms/CreateDrinkForm';
import axios from 'axios';

class CreateDrinkModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      restaurant: "",
      name: "",
      description: "",
      recipe: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  createDrink = event => {
    console.log(this.state);
    axios.post('/starbucks/drinks/', this.state).then(res => {
      console.log(res)
    })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggle}>Create A Drink!</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Post Drink</ModalHeader>
          <ModalBody>
            <CreateDrinkForm handleFormSubmit={this.createDrink} handleInputChange={this.handleInputChange} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}



export default CreateDrinkModal;