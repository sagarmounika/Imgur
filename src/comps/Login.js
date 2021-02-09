import React from "react";
import {
 Form,
 Button
} from "react-bootstrap";
 

const Login = () => {
 const submitHandler=(event)=>{
 event.preventDefault();
  alert("Logged In Successfully"); 
  }
  return (
    <div>
      <Form className="login-form"  onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="info" type="submit">
          <h6> Login </h6>
        </Button>
      </Form>
    </div>
  )
}

export default Login;