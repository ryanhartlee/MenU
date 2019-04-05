import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUpForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="userName" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="userEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="userPassword" placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label for="confPassword">Password</Label>
          <Input type="confpassword" name="confpassword" id="userConfPassword" placeholder="confim password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
