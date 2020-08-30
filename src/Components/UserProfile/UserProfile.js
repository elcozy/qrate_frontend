import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./UserProfile.css";
import { NavLink } from "react-router-dom";
export default class UserProfile extends Component {
  render() {
    return (
      <div className="main content">
        <h1>User Profile Page</h1>
        <h5>In progress:...</h5>
        <NavLink to="/settings">
          <button className="checkout ml-sm-2">GO TO SETTING</button>
        </NavLink>
      </div>
    );
  }
}
