import React,{useState,useEf} from 'react';
import Home from './comps/Home';
import Navigation from './comps/Navbar';
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Container>
      <Navigation/>
      <Route exact path="/" component={Home}/> 
      <Route path="/login" component={Login}/>    
      <Route path="/signup" component={SignUp}/>
     </Container>
    </div>
    </BrowserRouter>
  );
}
export default App;
