import React, { Component } from "react";
import "./Signin.scss";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentSelection: "credit",
      artistActive: false,
      clientActive: false,
    };
  }
  artistContent = (event) => {
    event.preventDefault();
    this.setState({
      clientActive: false,
      artistActive: true,
    });
  };
  clientContent = (event) => {
    event.preventDefault();
    this.setState({
      artistActive: false,
      clientActive: true,
    });
  };
  render() {
    const { artistActive, clientActive } = this.state;
    return (
      <div className="signin">
        <div className="d-flex flex-row flex-wrap">
          <div className="signup-left col-12 col-lg">
            <div className="container mt-5">
              <div className="signup-logo">
                <a href="/home" className="logo-icon">
                  <img src="/images/qrate logo1-02 2.png" alt="" />
                </a>
              </div>
              <div className="get-started d-flex flex-column text-center mb-4 mt-5 ">
                <span>SIGN IN TO QRATE</span>
                <span>Please enter your credentials to proceed.</span>
              </div>
              <div className="signin-choice">
                <div className="col-12 col-md my-3">
                  <div
                    className={
                      artistActive ? "active signin-artist" : "signin-client"
                    }
                    onClick={this.artistContent}
                  >
                    <div
                      className={
                        artistActive ? "active check-mark" : "check-mark"
                      }
                    >
                      <i class="fas fa-check"></i>
                    </div>
                    <div className="signin-icon mx-auto">
                      <img src="/assets/img/signup/Artist-signin.svg" alt="" />
                    </div>
                    <span className="choose-person">Artist</span>
                    <span className="choose-describe">
                      Showcase Your Art to the world
                    </span>
                  </div>
                </div>
                <div className="col my-3" type="radio">
                  <div
                    className={
                      clientActive ? "active signin-client" : "signin-artist"
                    }
                    onClick={this.clientContent}
                  >
                    <div
                      className={
                        clientActive ? "active check-mark" : "check-mark"
                      }
                    >
                      <i class="fas fa-check"></i>
                    </div>
                    <div className="signin-icon mx-auto">
                      <img src="/assets/img/signup/Client-signin.svg" alt="" />
                    </div>
                    <span className="choose-person">Client</span>
                    <span className="choose-describe">
                      Shop for art you love
                    </span>
                  </div>
                </div>
              </div>

              <div className="signup-form">
                <form action="/home">
                  <div className="form-group username">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="USERNAME"
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
                    SIGNIN
                  </button>
                  <p className="forgot-password text-center">
                    Already have an account? <a href="#">Sign in</a>
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
