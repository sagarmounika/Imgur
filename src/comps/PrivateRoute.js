import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { value } = useContext(UserContext);

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
