import React from "react";

//IMPORTING FOLDERS

import Home from "./Components/Dashboard/Homepage/home";
import Artist from "./Components/Dashboard/artist/artist";
import Explore from "./Components/Dashboard/explore/explore";
import Navbar from "./Components/Dashboard/Navbar/nav";
import Gallery from "./Components/Dashboard/ArtGallery/artgallery";
import GalleryDetails from "./Components/Dashboard/ArtGallery/ArtGalleryDetails/ArtGalleryDetails";
import Supplies from "./Components/Dashboard/ArtSupplies/artsupplies";
import Cart from "./Components/Dashboard/Cart/Cart";
import Categories from "./Components/Dashboard/Categories/Categories.component";
import CategoryMain from "./Components/Dashboard/Categories/CategoryMain/CategoryMain.component";
import Settings from "./Components/Dashboard/Settings/Settings";
import Exhibition from "./Components/Dashboard/Exhibition/exhibition";
import Catalogue from "./Components/Dashboard/Catalogue/Catalogue.component";
import UserProfile from "./Components/Dashboard/UserProfile/UserProfile";
import Logout from "./Components/Dashboard/Logout/Logout";
import Checkout from "./Components/Dashboard/Cart/Checkout";
import Checkout2 from "./Components/Dashboard/Cart/Checkout2";
import ArtistMain from "./Components/Dashboard/artist/ArtistMain/ArtistMain.component";
import ArtWorkMain from "./Components/Dashboard/artist/ArtistMain/ArtWork/ArtWorkMain/ArtWorkMain.component";

// IMPORTING REACT ROUTER DOM
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTING FROM REACT ROUTER
// import { Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}></Route>

          <Route exact path="/home/artist" component={Artist}></Route>

          <Route exact path="/home/explore" component={Explore}></Route>

          <Route exact path="/home/cart" component={Cart} />

          <Route exact path="/home/categories" component={Categories} />

          <Route exact path="/home/checkout" component={Checkout} />

          <Route exact path="/home/billing" component={Checkout2} />

          <Route path="/home/settings" component={Settings} />

          <Route exact path="/home/exhibition" component={Exhibition} />

          <Route exact path="/home/catalogue" component={Catalogue} />

          <Route exact path="/home/logout" component={Logout} />

          <Route exact path="/home/profile" component={UserProfile} />

          <Route exact path="/home/gallery" component={Gallery}></Route>

          <Route exact path="/home/exhibition" component={Exhibition}></Route>

          <Route
            path={`home/gallery/:artgalleryid`}
            component={GalleryDetails}
          />

          <Route exact path={`/artist/:artistId`} component={ArtistMain} />

          <Route
            exact
            path={`/categories/:categoryId`}
            component={CategoryMain}
          />

          <Route
            exact
            path={`/categories/:categoryId`}
            component={CategoryMain}
          />

          <Route
            exact
            path={`/artist/:artistId/:workId`}
            component={ArtWorkMain}
          />

          <Route exact path="/home/supplies" component={Supplies}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
