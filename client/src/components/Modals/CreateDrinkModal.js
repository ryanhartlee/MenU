import React from 'react';
import { Modal, ModalHeader, ModalBody, NavLink } from 'reactstrap';
import CreateDrinkForm from '../forms/CreateDrinkForm';
import axios from 'axios';
import store from '../../store';

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
    // console.log('yeeet', this.state);
    this.toggle();
    console.log(this.state.recipe);

    let recipe = this.state.recipe.split(",")




    axios.post('/drinks', {
      name: this.state.name,
      restaurant: this.state.restaurant,
      description: this.state.description,
      recipe: recipe,
      image: this.state.image,
   
      
      
      user: store.getState().auth.user.userName
    }).then(window.location="/" + this.state.restaurant.replace(/ /g,''));
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
        <NavLink onClick={this.toggle}>Create A Drink!</NavLink>
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