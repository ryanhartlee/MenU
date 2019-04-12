import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function SignInForm (props) {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input value={props.email} onChange={props.handleInputChange} type="email" name="email" id="userEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input value={props.password} onChange={props.handleInputChange} type="password" name="password" id="userPassword" placeholder="password" />
        </FormGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
      </Form>
    );
}

export default SignInForm;