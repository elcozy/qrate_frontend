import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./UserProfile.css";
import { NavLink } from "react-router-dom";
import { Content } from "../GeneralComp/Content";

export default class UserProfile extends Component {
  render() {
    return (
      <Content className="container-fluid">
        <h1>User Profile Page</h1>
        <h5>In progress:...</h5>
        <NavLink to="/settings">
          <button className="checkout ml-sm-2">GO TO SETTING</button>
        </NavLink>
      </Content>
    );
  }
}
