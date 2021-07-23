import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import End from "../pages/End";
import Products from "../pages/Products";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" component={Cart} />
      <Route path="/end" component={End} />
    </Switch>
  );
};

export default Routes;
