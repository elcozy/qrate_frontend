import React, { Component } from "react";
import "./Signup.scss";
export default class Signup extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="signup">
        <div className="d-flex flex-row flex-wrap">
          <div className="signup-left col-12 col-lg">
            <div className="container mt-5">
              <div className="signup-logo">
                <a href="/home" className="logo-icon">
                  <img src="/images/qrate logo1-02 2.png" alt="" />
                </a>
              </div>
              <div className="get-started d-flex flex-column text-center mb-5 pb-3">
                <span>Get started for free</span>
                <span>Signup to gain access to our amazing offers</span>
              </div>
              <div className="signup-form">
                <form action="/home">
                  <div className="form-group name">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="FULLNAME"
                    />
                  </div>

                  <div className="form-group number">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="PHONE NUMBER"
                    />
                  </div>
                  <div class="form-group dropdown-select">
                    <select class="form-control" id="artist-client">
                      <option>ARTIST</option>
                      <option>CLIENT</option>
                    </select>
                  </div>
                  <div className="form-group email">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="EMAIL ADDRESS"
                      required
                    />
                  </div>

                  <div className="form-group password">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="PASSWORD"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    CREATE ACCOUNT
                  </button>
                  <p className="forgot-password text-center">
                    Already have an account? <a href="/signin">Sign in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="signup-right col">
            <div className="py-5 pl-5 h-100 contents d-flex flex-column justify-content-between">
              <div className="top">
                <div className="art-quote  d-flex flex-column">
                  <span className="">Life Is An Art</span>
                  <span className="">-- Tassy Omah</span>
                </div>
              </div>
              <div className="buttom">
                <div className="artwork-by">
                  <span className="">
                    Artwork by <span>Tasha cobbs</span>
                  </span>
                </div>
                <div className="d-flex flex-row bottom-nav">
                  <a class="nav-links " href="#">
                    HOME
                  </a>
                  <a class="nav-links" href="#">
                    ABOUT
                  </a>
                  <a class="nav-links" href="#">
                    FEATURES
                  </a>
                  <a class="nav-links" href="#">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>

            {/* <img src="/assets/img/signup/signup-right.svg" alt="" /> */}
          </div>
        </div>
      </div>
    );
  }
}
