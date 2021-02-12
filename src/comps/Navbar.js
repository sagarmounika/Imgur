import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import {
 Navbar,
} from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to='/' className="p-2 navbar"><h2> <span><FontAwesomeIcon className="icon2"icon={ faCameraRetro}/></span>IMGUR </h2>
      </Navbar.Brand>
    </Navbar>
  );
};
export default Navigation;
