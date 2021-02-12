import React, { useState, useEffect } from "react";
import Home from "./comps/Home";
import Navigation from "./comps/Navbar";
import Login from "./comps/Login";
import { UserContext } from "./comps/UserContext";
import PrivateRoute from "./comps/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";
import { auth } from "./firebase/config";
function App() {
  const [value, setValue] = useState(null);
  const [user, setUser] = useState(null);

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setValue(true);
        setUser(user.displayName);
      } else {
        setValue(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [value]);

  return (
    <div className="App">
      <UserContext.Provider value={{ value, setValue }}>
        <Navigation user={user} />
        <Switch>
          <Login exact path="/" />
          <PrivateRoute component={Home} exact path="/home" />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}
export default App;
