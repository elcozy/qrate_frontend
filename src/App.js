import React from "react";

//IMPORTING FOLDERS

import home from "./Components/Homepage/home";
import artist from "./Components/artist/artist";
import explore from "./Components/explore/explore";
import Navbar from "./Components/Navbar/nav";
import Gallery from "./Components/ArtGallery/artgallery";
import galleryDetails from "./Components/ArtGallery/ArtGalleryDetails/ArtGalleryDetails";
import supplies from "./Components/ArtSupplies/artsupplies";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Cart/Checkout";
import ArtistMain from "./Components/artist/ArtistMain/ArtistMain.component";
import ArtWorkMain from "./Components/artist/ArtistMain/ArtWork/ArtWorkMain/ArtWorkMain.component";

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

          <Route exact path="/gallery" component={Gallery}></Route>

          <Route path={`/gallery/:artgalleryid`} component={galleryDetails} />

          <Route exact path={`/artist/:artistId`} component={ArtistMain} />

          <Route
            exact
            path={`/artist/:artistId/:workId`}
            component={ArtWorkMain}
          />

          <Route exact path="/supplies" component={supplies}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
