import React from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import SignInForm from '../forms/SignInForm';
import SignUpModal from './SignUpModal';

class SignInModal extends React.Component {
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
        <Button onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <SignInForm />
            <br />
            <SignUpModal />
          </ModalBody>  
        </Modal>
      </div>
    );
  }
}



export default SignInModal;