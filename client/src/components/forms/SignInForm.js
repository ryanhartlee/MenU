import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from "classnames";

function SignInForm (props, errors) {
    return (
      <Form>
        <FormGroup>
          <Label for="email"></Label>
          <Input value={props.email} onChange={props.handleInputChange} className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })} type="email" name="email" id="userEmail" placeholder="Email" />
                  <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input value={props.password} onChange={props.handleInputChange} className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })} type="password" name="password" id="userPassword" placeholder="Password" />
                  <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
        </FormGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
      </Form>
    );
}

export default SignInForm;