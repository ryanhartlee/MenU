import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function CreateDrinkForm (props) {
     return (
      <Form>
          <FormGroup>
          <Label for="restaurantSelect">Select Restaurant</Label>
          <Input type="select" name="restauranSelect" id="restaurantSelect">
            <option>Starbucks</option>
            <option>Dutch Bros</option>
            <option>Sonic</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input value={props.name} onChange={props.handleInputChange} type="name" name="name" id="drinkname" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input value={props.description} onChange={props.handleInputChange} type="description" name="description" id="drinkdescription" placeholder="description" />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input value={props.recipe} onChange={props.handleInputChange} type="recipe" name="recipe" id="drinkrecipe" placeholder="recipe" />
        </FormGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
      </Form>
    );
  }

  export default CreateDrinkForm;