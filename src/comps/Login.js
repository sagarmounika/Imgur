import React, { useState, useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { auth, provider } from "../firebase/config";
import { UserContext } from "./UserContext";
import { Redirect, Switch, Route } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { value, setValue } = useContext(UserContext);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        setLoggedIn(true);
        setValue(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  if (loggedIn) {
    return (
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    );
  }

  return (
    <Jumbotron fluid className="login">
      <h6>{value}</h6>
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
