import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
import Homepage from './Homepage';

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
      {/* <Route exact path="/:id" component={App}></Route>
      <Route exact path="/get-started" component={ContactDetails}></Route>
      <Route exact path="/what-are-you" component={WhatAreYou}></Route>
      <Route exact path="/captcha-confirmation" component={NotARobot}></Route>
      <Route exact path="/enter-email" component={Email}></Route>
      <Route exact path="/enter-password" component={Password}></Route> */}
    </div>
    
  </BrowserRouter>,
  document.getElementById('root')
);

