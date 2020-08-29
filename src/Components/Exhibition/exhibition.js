import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./exhibit.css";
import MainWrapper from "../Shared/MainWrapper";

export default class exhibition extends Component {
  render() {
    return (
      <MainWrapper className="container-fluid">
        <div className="exhibition-image container bg-info mt-5">
          <div className="filter"></div>
          <div className="exhibition-text">
            <h5>Art De Supreme 2020</h5>
          </div>
        </div>
      </MainWrapper>
    );
  }
}
