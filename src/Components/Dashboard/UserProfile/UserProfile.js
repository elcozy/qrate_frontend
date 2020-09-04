import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./UserProfile.css";
import { NavLink } from "react-router-dom";
import MainWrapper from "../Shared/MainWrapper";

export default class UserProfile extends Component {
  render() {
    return (
      <MainWrapper className="container-fluid">
        <h1>User Profile Page</h1>
        <h5>In progress:...@Summy</h5>
        <NavLink to="/home/settings">
          <button className="checkout ml-sm-2">GO TO SETTING</button>
        </NavLink>
      </MainWrapper>
    );
  }
}
