import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./pages/StateProvider";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("in PrivateRoute");
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
