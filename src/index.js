import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
import Homepage from './Homepage';
import Dashboard from './Components/Dashboard/index';
import ArtDetails from './Components/Dashboard/ArtDetails/index';
import Gallery from './Components/Dashboard/Gallery/index';
import Categories from './Components/Dashboard/Categories/index';

// CSS
import "./css/styles.css";

class App extends Component {
  render() {
    return (
      <Homepage />
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/dashboard/art/:id" component={ArtDetails}></Route>
      <Route exact path="/dashboard/gallery" component={Gallery}></Route>
      <Route exact path="/dashboard/categories" component={Categories}></Route>
    </div>
    
  </BrowserRouter>,
  document.getElementById('root')
);

