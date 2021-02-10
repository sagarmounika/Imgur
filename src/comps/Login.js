import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Login = ({ signIn }) => {
  // const[state,dispatch]=useStatValue()

  return (
    <Jumbotron fluid className="login">
      <h1>IMGUR</h1>
      <h4>Sign in to Imgur</h4>
      <p>
      Imgur is the easiest way to discover the magic of the Internet, with everything from funny pics of pets, to funny GIFs from movies and TV shows
      </p>
      <p>
        <Button onClick={signIn}>Login with Google</Button>
      </p>
    </Jumbotron>
  );
};

export default Login;
