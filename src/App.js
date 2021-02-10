import React, { useState, useEf } from "react";
import Home from "./comps/Home";
import Navigation from "./comps/Navbar";
import Login from "./comps/Login";
// import SignUp from './comps/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, provider } from "./firebase/config";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Container> */}
        {/* <Navigation/>
      <Route exact path="/" component={Home}/>  */}
        {/* <Route path="/login" component={Login}/>     */}
        <Login signIn={signIn} />
        {/* <Route path="/signup" component={SignUp}/> */}
        {/* </Container> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
