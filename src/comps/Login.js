import React, { useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { auth, provider } from "../firebase/config";
import { UserContext } from "./UserContext";
import { Redirect, Route } from "react-router-dom";

const Login = () => {
  const { value, setValue } = useContext(UserContext);
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(() => {
        setValue(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  if (value) {
    return (
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    );
  }

  return (
    <Jumbotron fluid className="login">
      <h1>IMGUR</h1>
      <h4>Sign in to Imgur</h4>
      <p>
        Imgur is the easiest way to discover the magic of the Internet, with
        everything from funny pics of pets, to funny GIFs from movies and TV
        shows
      </p>
      <p>
        <Button onClick={signIn}>Login with Google</Button>
      </p>
    </Jumbotron>
  );
};

export default Login;
