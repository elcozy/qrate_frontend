import React from "react";

//IMPORTING FOLDERS

import home from "./Components/Homepage/home";
import artist from "./Components/artist/artist";
import explore from "./Components/explore/explore";
import cart from "./Components/cart/cart";

// IMPORTING REACT ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTING FROM REACT ROUTER
import { Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={home}></Route>

          <Route exact path="/artist" component={artist}></Route>

          <Route exact path="/explore" component={explore}></Route>

          <Route exact path="/cart" component={cart}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
