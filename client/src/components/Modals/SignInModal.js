import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SignInForm from '../forms/SignInForm';
import SignUpModal from './SignUpModal';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import store from '../../store';

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

  

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      window.location="/" // push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
    // console.log(this.state)
  };

  loginUser = event => {
    console.log(this.state.email + "User login");
    axios.post('api/users/login', {
      email: this.state.email,
      password: this.state.password
    }).then(function () {
      console.log("login successfull"); 
      // console.log(store.getState());
      // window.location="/"
      
    })
    .catch(function (err) {
      alert("Invalid Username Or Password");
    });
    // console.log(store.getState());
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData)
    // this.toggle();
    
    
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modalz">
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



SignInModal.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(SignInModal);
