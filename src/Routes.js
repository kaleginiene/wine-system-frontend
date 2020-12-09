import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Header, Footer, PrivateRoute } from "./components";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const WineList = lazy(() => import("./pages/WineList/WineList"));
const AddWine = lazy(() => import("./pages/AddWine/AddWine"));
const StockUp = lazy(() => import("./pages/StockUp/StockUp"));

function Routes() {
  const auth = useContext(AuthContext);
  return (
    <Router>
      <Header
        loggedIn={auth.token}
        logout={() => auth.updateToken(localStorage.removeItem("token"))}
      />
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute
            exact
            path="/"
            component={WineList}
            redirectPath="/login"
          />
          <PrivateRoute
            exact
            path="/add-wine"
            component={AddWine}
            redirectPath="/login"
          />
          <PrivateRoute
            exact
            path="/stock-up"
            component={StockUp}
            redirectPath="/login"
          />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
