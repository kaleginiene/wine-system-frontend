import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ path, component, redirectPath }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "null") {
      const tokenExpiration = jwtDecode(token).exp;
      const timeNow = new Date().getTime() / 1000;

      if (tokenExpiration < timeNow) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth === null) {
    return <></>;
  } else if (isAuth) {
    return <Route exact path={path} component={component} />;
  } else {
    return <Redirect to={redirectPath} />;
  }
};

export default PrivateRoute;
