import React from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import SignUpForm from '../forms/SignUpForm';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggle}>Not a user? Sign Up</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <SignUpForm />
          </ModalBody>  
        </Modal>
      </div>
    );
  }
}



export default SignUpModal;