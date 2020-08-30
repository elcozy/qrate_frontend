import React from "react";

//IMPORTING FOLDERS

import Home from "./Components/Homepage/home";
import Artist from "./Components/artist/artist";
import Explore from "./Components/explore/explore";
import Navbar from "./Components/Navbar/nav";
import Gallery from "./Components/ArtGallery/artgallery";
import GalleryDetails from "./Components/ArtGallery/ArtGalleryDetails/ArtGalleryDetails";
import Supplies from "./Components/ArtSupplies/artsupplies";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories.component";
import CategoryMain from "./Components/Categories/CategoryMain/CategoryMain.component";
import Settings from "./Components/Settings/Settings";
import Exhibition from "./Components/Exhibition/exhibition";
import Catalogue from "./Components/Catalogue/Catalogue";
import UserProfile from "./Components/UserProfile/UserProfile";
import Logout from "./Components/Logout/Logout";
import Checkout from "./Components/Cart/Checkout";
import Checkout2 from "./Components/Cart/Checkout2";
import ArtistMain from "./Components/artist/ArtistMain/ArtistMain.component";
import ArtWorkMain from "./Components/artist/ArtistMain/ArtWork/ArtWorkMain/ArtWorkMain.component";

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
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/artist" component={Artist}></Route>

          <Route exact path="/explore" component={Explore}></Route>

          <Route exact path="/cart" component={Cart} />

          <Route exact path="/categories" component={Categories} />

          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/billing" component={Checkout2} />

          <Route path="/settings" component={Settings} />

          <Route exact path="/exhibition" component={Exhibition} />

          <Route exact path="/catalogue" component={Catalogue} />

          <Route exact path="/logout" component={Logout} />

          <Route exact path="/profile" component={UserProfile} />

          <Route exact path="/gallery" component={Gallery}></Route>

          <Route exact path="/exhibition" component={Exhibition}></Route>

          <Route path={`/gallery/:artgalleryid`} component={GalleryDetails} />

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

          <Route exact path="/supplies" component={Supplies}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
