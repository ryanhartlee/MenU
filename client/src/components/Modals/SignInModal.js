import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SignInForm from '../forms/SignInForm';
import SignUpModal from './SignUpModal';
import axios from 'axios';

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: "",
      errors: {}
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  };

  loginUser = event => {
    console.log(this.state.email + "User login");
    axios.post('api/users/login', {
      email: this.state.email,
      password: this.state.password
    }).then(function () {
      console.log("login successfull"); 
    })
    this.toggle();
    // .catch(function (err) {
    //   alert("Invalid Username Or Password");
    // });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <SignInForm handleFormSubmit={this.loginUser} handleInputChange={this.handleInputChange} />
            <br />
            <SignUpModal />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}



export default SignInModal;