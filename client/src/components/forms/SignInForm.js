import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignInForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="userEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="userPassword" placeholder="password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
