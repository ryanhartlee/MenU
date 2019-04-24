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
          <Input value={props.name} onChange={props.handleInputChange} type="name" name="name" id="drinkname" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input value={props.description} onChange={props.handleInputChange} type="description" name="description" id="drinkdescription" placeholder="Description" />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input value={props.recipe} onChange={props.handleInputChange} type="recipe" name="recipe" id="drinkrecipe" placeholder="Recipe" />
        </FormGroup>
        {/* <FormGroup>
       <Label for="image">Image</Label>
       <Input value={props.image} onChange={props.handleInputChange} type="file" name="image" id="drinkimage" placeholder="Image" />
       <FormText color="muted">
         Upload an image of your secret menu item.
       </FormText>
     </FormGroup> */}
     <Button>Submit</Button>
    </Form>
    );
  }

  export default CreateDrinkForm;