import React from 'react';
// This was in the tutorial from part 1 - not sure why we didn't include it or if we need it. - BG
import { withRouter } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, NavLink } from 'reactstrap';
import SignUpForm from '../forms/SignUpForm';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.toggle = this.toggle.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
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

  createUser = event => {
    console.log(this.state);
    if (this.state.password === this.state.password2) {
    this.toggle();
    axios.post('/api/users/register', {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }).then(res => {
      console.log(res)
      this.props.registerUser(this.createUser, this.props.history);
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
        <button 
          className="btn" 
          onClick={this.toggle}
          >Not a user? Sign Up
        </button>
        <Modal 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
          className="modalz">
            <ModalHeader 
              toggle={this.toggle}>Sign Up
            </ModalHeader>
            <ModalBody>
              <SignUpForm 
                handleFormSubmit={this.createUser} 
                handleInputChange={this.handleInputChange} 
              />
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUpModal));