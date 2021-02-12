import React, { useContext } from "react";
// import isLogin from "../App";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { value, setValue } = useContext(UserContext);
  console.log(value);
  return (
    <Route
      {...rest}
      render={(props) =>
        value ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
