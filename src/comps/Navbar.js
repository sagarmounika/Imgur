import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import {
 Navbar,
 Nav,
 Form,
 FormControl,
 Button,
} from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to='/' className="p-2 navbar"><h2> <span><FontAwesomeIcon className="icon2"icon={ faCameraRetro}/></span>IMGUR </h2>
      </Navbar.Brand>
      {/* <Nav className="mr-auto">
        <Nav.Link as={NavLink} to='/'><h6>Home </h6></Nav.Link>
        <Nav.Link as={NavLink} to='/signup'><h6>Sign Up</h6></Nav.Link>
        <Nav.Link as={NavLink} to='/login'> <h6>Login</h6> </Nav.Link> 
      </Nav> */}
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
  );
};
export default Navigation;
