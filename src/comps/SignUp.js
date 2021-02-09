
import React from "react";

import {
  Form,
  Button,
  Row,
  Col
 } from "react-bootstrap";
  

const SignUp=()=>{
  return(
    <Form className="signup-form">
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        </Form.Row>
        <Form.Group >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      <Button variant="info"  type="submit">
        SignUp
      </Button>
</Form>
)
}
export default SignUp;