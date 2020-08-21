import React from "react";

//IMPORTING FOLDERS

import CartHome from "./cartHome";
import CartCheckout from "./cartCheckout";

// IMPORTING REACT ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTING FROM REACT ROUTER
import { Redirect } from "react-router-dom";

class cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <Switch>
          <Route exact path="/carlt" component={CartHome}></Route>

          <Route exact path="/cart" component={CartCheckout}></Route>
        </Switch>
      </div>
    );
  }
}

export default cart;
