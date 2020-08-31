import MainWrapper from "../Shared/MainWrapper";
import { CustomCheckbox } from "../Shared/CustomCheckbox/CustomCheckbox";
import Input from "../Shared/Input/Input";
import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM

export default class supplies extends Component {
  render() {
    return (
      <MainWrapper className="container-fluid">
        <h1>Supplies Page</h1>
        <h5>In progress...</h5>
        <Input placeholder="Search" />
        <br />
        <CustomCheckbox name={"Art Desks & Easels"} id={"art-desk"} />
        <br />
        <CustomCheckbox name={"Art Gift Sets"} id={"art-gift-set"} />
        <br />
        <CustomCheckbox name={"Artist Canvas"} id={"artist-canvas"} />
        <br />
        <CustomCheckbox
          name={"Paper and Drawing Pads"}
          id={"paper-drawing-pad"}
        />
      </MainWrapper>
    );
  }
}
