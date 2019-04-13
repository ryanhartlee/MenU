import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function SignUpForm (props) {
     return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input value={props.name} onChange={props.handleInputChange} type="name" name="name" id="userName" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input value={props.email} onChange={props.handleInputChange} type="email" name="email" id="userEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input value={props.password} onChange={props.handleInputChange} type="password" name="password" id="userPassword" placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label for="confPassword">Confirm Password</Label>
          <Input value={props.password2} onChange={props.handleInputChange} type="password" name="password2" id="userConfPassword" placeholder="confim password" />
        </FormGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
      </Form>
    );
  }

  export default SignUpForm;