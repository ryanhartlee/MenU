import React from 'react';
import { Modal, ModalHeader, ModalBody, NavLink } from 'reactstrap';
import CreateDrinkForm from '../forms/CreateDrinkForm';
import axios from 'axios';
import store from '../../store';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateDrinkModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      restaurant: "",
      name: "",
      description: "",
      recipe: [], 
      image: "" || "nothing",
      imageURL: "https://images.assetsdelivery.com/compings_v2/rastudio/rastudio1601/rastudio160103409.jpg"
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleFileUpload = image => {
    
    var form = new FormData();
    const e = document.getElementsByClassName('input-image')[0].files[0]
    form.append('image', e)
    var settings = {
      "url": "https://api.imgur.com/3/image",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": "Client-ID c3dc2329edcccba"
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
    let url = 'https://api.imgur.com/3/image/'
    axios(settings).then(data=> {
      console.log(data.data.data.link)
      this.setState({imageURL: data.data.data.link})
      
    })
  }

  createDrink = event => {
    // console.log('yeeet', this.state);
    if (this.state.restaurant === "" ) {
      alert("Restaurant required.")
    } 
    else if(this.state.name === "" ) {
      alert("Drink name required.")
    }
    else if (this.state.description === "" ) {
      alert("Description required.")
    }
    else if (this.state.recipe.length == 0 ) {
      alert("Recipe required.")
    }
    else {
    

    this.toggle();
    

    let recipe = this.state.recipe.split(",")

    axios.post('/drinks', {
      name: this.state.name,
      restaurant: this.state.restaurant,
      description: this.state.description,
      recipe: this.state.recipe,
      user: store.getState().auth.user.userName,
      image: this.state.imageURL
    })
    .then(window.location="/" + this.state.restaurant.replace(/ /g,''));
  };
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    // console.log(event.target.value)
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
            <FormGroup>
              <Label for="image">Image</Label>
              <Input onChange={this.handleFileUpload.bind(this)} className="input-image" type="file" name="image" id="drinkimage" placeholder="Image" />
              <FormText color="muted">
                Upload an image of your secret menu item.
              </FormText>
            </FormGroup>
            <CreateDrinkForm handleFormSubmit={this.createDrink} handleInputChange={this.handleInputChange} handleFileUpload={this.handleFileUpload}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}



export default CreateDrinkModal;