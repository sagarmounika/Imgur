import React, { useState } from "react";
import Home from "./comps/Home";
import Navigation from "./comps/Navbar";
import Login from "./comps/Login";
import { UserContext } from "./comps/UserContext";
import PrivateRoute from "./comps/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";

function App() {
  const [value, setValue] = useState(false);
  return (
    // <BrowserRouter></BrowserRouter>
    <div className="App">
      {/* <Container> */}
      <Navigation />

      <UserContext.Provider value={{ value, setValue }}>
        <Switch>
          <Login exact path="/" />
           <PrivateRoute component={Home} exact path="/home" />
          {/* <Home exact path="/home" /> */}
        </Switch>
      </UserContext.Provider>

     
    </div>
  );
}
export default App;
