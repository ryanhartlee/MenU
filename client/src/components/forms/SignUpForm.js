import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function SignUpForm (props) {
     return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <span className="red-text">{errors.name}</span>
          <Input 
            value={props.name} 
            onChange={props.handleInputChange} 
            type="name" 
            name="name" 
            id="userName" 
            placeholder="name"
            error={errors.name}
            className={classnames("", {
              invalid: errors.name
            })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <span className="red-text">{errors.email}</span>
          <Input 
            value={props.email} 
            onChange={props.handleInputChange} 
            type="email" 
            name="email" 
            id="userEmail" 
            placeholder="email"
            error={errors.email}
            className={classnames("", {
              invalid: errors.email
            })} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <span className="red-text">{errors.password}</span>
          <Input 
            value={props.password} 
            onChange={props.handleInputChange} 
            type="password" 
            name="password" 
            id="userPassword" 
            placeholder="password" 
            error={errors.password}
            className={classnames("", {
              invalid: errors.password
            })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confPassword">Confirm Password</Label>
          <span className="red-text">{errors.password2}</span>
          <Input 
            value={props.password2} 
            onChange={props.handleInputChange} 
            type="password" 
            name="password2" 
            // Change this ID to password2?
            id="userConfPassword" 
            placeholder="confim password" 
            error={errors.password2}
            className={classnames("", {
              invalid: errors.password2
            })}
          />
        </FormGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
      </Form>
    );
  }

  export default SignUpForm;