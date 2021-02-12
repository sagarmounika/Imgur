import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button } from "react-bootstrap";
import { UserContext } from "./UserContext";

const Navigation = ({ user }) => {
  const { value, setValue } = useContext(UserContext);
  const signOut = () => {
    auth
      .signOut()
      .then((res) => {
        setValue(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/" className="p-2 navbar">
        <h2>
          {" "}
          <span>
            <FontAwesomeIcon className="icon2" icon={faCameraRetro} />
          </span>
          IMGUR{" "}
        </h2>
      </Navbar.Brand>
      <div className="navbar_right">
        {value && <h6>{user}</h6>}
        {value && <Button onClick={signOut}>SignOut</Button>}
      </div>
    </Navbar>
  );
};
export default Navigation;
