import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SignUpForm from '../forms/SignUpForm';
import axios from 'axios';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.toggle = this.toggle.bind(this);
  }
  

  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  createUser = event => {
    console.log(this.state);
    if (this.state.password === this.state.password2) {
    this.toggle();
    axios.post('/api/users/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }).then(res => {
      console.log(res)
    })
  } else {alert("Passwords must match")}
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
        <button className="btn" onClick={this.toggle}>Not a user? Sign Up</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <SignUpForm handleFormSubmit={this.createUser} handleInputChange={this.handleInputChange} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}



export default SignUpModal;