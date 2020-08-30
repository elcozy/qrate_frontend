import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./explore.css";
import like from "./like.svg";
//import isLiked from './isLiked.svg'
import data from "./explore.json";
//import Skeleton from "react-loading-skeleton";
import MainWrapper from "../Shared/MainWrapper";

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Like: like,
      likeCount: 0,
      id: 1,
    };
  }

  render() {
    const detail = this.state;
    return (
      <MainWrapper className="explore-body">
        <nav className="nav nav-pills explore-nav">
          <a className="explore-nav-link" href="#">
            Recommended For You
          </a>
          <a className="explore-nav-link" href="#">
            Trending
          </a>
          <a className="explore-nav-link" href="#">
            Oil Painting
          </a>
          <a className="explore-nav-link" href="#">
            Digital Art
          </a>
          <a className="explore-nav-link" href="#">
            Acrylic Painting
          </a>
          <a className="explore-nav-link" href="#">
            Ceramics
          </a>
          <a className="explore-nav-link" href="#">
            Pastel Art
          </a>
        </nav>

        <div className="explore-card-columns mt-4 container-fluid">
          {data.map((detail) => (
            <div className="card" key={detail.id}>
              <img src={detail.imgSrc} className="card-img-top"></img>
              <div className={detail.class}>
                <div className="explore-user-detail">
                  <img src={detail.authorImg}></img>
                  <span className="explore-username">
                    {detail.authorName}
                  </span>{" "}
                  <input
                    className="follow"
                    value="Follow"
                    type="button"
                  ></input>
                </div>
                <h5 className="card-title mt-4">{detail.title}</h5>
                <small>{detail.tag}</small>
                <p className="card-title mt-3" style={{ lineHeight: "20px" }}>
                  {detail.text}
                </p>
                <div className="user-reaction row container mt-1">
                  <div>
                    {" "}
                    <i className="far fa-comment"></i>{" "}
                  </div>
                  <div>
                    <i className="far fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainWrapper>
    );
  }
}
