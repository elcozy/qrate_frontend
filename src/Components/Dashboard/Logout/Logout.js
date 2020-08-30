import MainWrapper from "../Shared/MainWrapper";
import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./Logout.css";

export default class Logout extends Component {
  render() {
    return (
      <MainWrapper className="">
        <h1>Logged Out</h1>
      </MainWrapper>
    );
  }
}
