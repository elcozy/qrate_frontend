import React from "react";

//IMPORTING FOLDERS

import home from "./Components/Homepage/home";
import artist from "./Components/artist/artist";
import explore from "./Components/explore/explore";
import Navbar from "./Components/Navbar/nav";
import gallery from "./Components/ArtGallery/artgallery";
import supplies from "./Components/ArtSupplies/artsupplies";
import Cart from "./Components/cart/cart";
import Checkout from "./Components/cart/Checkout";


// IMPORTING REACT ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTING FROM REACT ROUTER
import { Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={home}></Route>

          <Route exact path="/artist" component={artist}></Route>

          <Route exact path="/explore" component={explore}></Route>

          <Route exact path="/cart" component={Cart} />
          
          <Route exact path="/checkout" component={Checkout} />

          <Route exact path="/gallery" component={gallery}></Route>

          <Route exact path="/supplies" component={supplies}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
