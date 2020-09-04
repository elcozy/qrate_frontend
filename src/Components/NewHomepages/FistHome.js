import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const randomBg = () => {
  var randomNo = Math.floor(Math.random() * 6);
  var bg = [
    "/images/homepage/01.png",
    "/images/homepage/02.jpg",
    "/images/homepage/03.jpg",
    "/images/homepage/04.png",
    "/images/homepage/05.png",
    "/images/homepage/06.png",
  ];
  return bg[randomNo];
};

const Display = (props) => {
  if (props) {
    if (props.showComponent === "StartPage") {
      return (
        <div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-light mb-2 mb-md-6">
            <h2 className="font-weight-bold mb-4">
              Discover The Beauty of <span className="text-orange">Art</span>
            </h2>
            <p className="lead px-3">
              Qrate connects Africa's best visual artists and creatives.
            </p>
          </div>
          <div className="px-2 px-md-auto w-100">
            <button
              className="btn bg-orange w-100 text-light my-2 btn-lg"
              id="getStarted"
              value="GetStarted"
              onClick={(e) => props.onClick(e.target.value)}
            >
              Get Started
            </button>
            <button
              className="btn bg-white w-100 text-orange my-2 btn-lg"
              value="ConfirmEmail"
              onClick={(e) => props.onClick(e.target.value)}
            >
              Sign in
            </button>
          </div>
        </div>
      );
    } else if (props.showComponent === "GetStarted") {
      return (
        <div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-light mb-5 mb-md-6">
            <h2 className="font-weight-bold mb-4">
              Discover The Beauty of <span className="text-orange">Art</span>
            </h2>
          </div>
          <div className="px-2 px-md-auto contactInfo">
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-100 bg-light p-3 px-md-5 border-0 first"
                autoComplete="true"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-100 bg-light p-3 px-md-5 border-0"
                autoComplete="true"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-100 bg-light p-3 px-md-5 border-0 last"
                autoComplete="true"
                required
              />
            </form>

            <button
              className="btn bg-orange text-light w-100 mt-2 mt-md-5 btn-lg"
              value="WhatAreYou"
              onClick={(e) => props.onClick(e.target.value)}
            >
              Next
            </button>
          </div>
        </div>
      );
    } else if (props.showComponent === "WhatAreYou") {
      return (
        <div className="whatAreYou discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-light mb-5 mb-md-6">
            <h2 className="font-weight-bold mb-4">
              Discover The Beauty of <span className="text-orange">Art</span>
            </h2>
          </div>
          <div className="px-2 px-md-auto w-100">
            <h4 className="p-3 py-3 px-md-5 w-100 mb-0">What are you?</h4>
            <div className="d-flex flex-column what-you-do">
              <span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
                Artist<i className="fa fa-check"></i>
              </span>
              <span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
                Qrater<i className="fa fa-check"></i>
              </span>
              <span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
                Gallery<i className="fa fa-check"></i>
              </span>
              <span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
                Art Supplier<i className="fa fa-check"></i>
              </span>
            </div>

            <button
              className="btn bg-orange text-light w-100 mt-2 mt-md-5 btn-lg"
              value="NotARobot"
              onClick={(e) => props.onClick(e.target.value)}
            >
              Next
            </button>
          </div>
        </div>
      );
    } else if (props.showComponent === "NotARobot") {
      return (
        <div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-light mb-5 mb-md-6">
            <h2 className="font-weight-bold mb-4">
              Discover The Beauty of <span className="text-orange">Art</span>
            </h2>
          </div>
          <div className="px-2 px-md-auto w-100 not-a-robot">
            <div className="faint-bg p-3 p-md-4 d-flex justify-content-between align-items-center rounded">
              <div className="form-check d-flex align-items-center pl-0">
                <input
                  className="form-check-input mt-0 ml-0"
                  type="checkbox"
                  value=""
                  id="notRobot"
                />
                <label
                  className="form-check-label text-center"
                  htmlFor="notRobot"
                >
                  I'm not a robot
                </label>
              </div>
              <img src="/images/homepage/captcha.png" alt="captcha" />
            </div>

            <p className="text-light text-center mt-3 mt-md-5 mb-md-n2">
              Verification is required. Please, try again
            </p>

            <button className="btn bg-orange text-light w-100 mt-2 mt-md-5 btn-lg">
              Almost Done!
            </button>
          </div>
        </div>
      );
    } else if (props.showComponent === "ConfirmEmail") {
      return (
        <div className="email-confirmation discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-light mb-5 mb-md-6">
            <h2 className="font-weight-bold mb-4">
              Discover The Beauty of <span className="text-orange">Art</span>
            </h2>
            <p className="lead px-3">
              Qrate connects Africa's best visual artists and creatives.
            </p>
          </div>
          <div className="px-2 px-md-auto w-100">
            <input
              className="btn faint-bg w-100 py-2 email"
              type="email"
              placeholder="Email"
              autoComplete="true"
              required
            />
            <button
              className="btn bg-orange w-100 text-light mt-3 btn-lg"
              value="ConfirmPassword"
              onClick={(e) => props.onClick(e.target.value)}
            >
              Next
            </button>
          </div>
        </div>
      );
    } else if (props.showComponent === "ConfirmPassword") {
      return (
        <div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
          <div className="text-center text-light mb-5 mb-md-6">
            <h2 className="font-weight-bold mb-4">
              Discover The Beauty of <span className="text-orange">Art</span>
            </h2>
            <p className="lead px-3">
              Qrate connects Africa's best visual artists and creatives.
            </p>
          </div>
          <div className="px-2 px-md-auto w-100">
            <input
              className="btn faint-bg w-100 py-2 email"
              type="password"
              placeholder="Password"
              autoComplete="true"
              required
            />
            <button
              className="btn bg-orange w-100 text-light mt-3 btn-lg"
              value="ConfirmEmail"
            >
              <Link to="/home">Log in</Link>
            </button>
          </div>
        </div>
      );
    }
  }
};

const FirstHomepage = (props) => {
  const animate = useRef(null);

  useEffect(() => {
    if (animate.current !== null) {
      animate.current.classList.add("show");
    }
  });

  return (
    <div
      className="wrapper"
      id="11"
      style={{ backgroundImage: `url(${randomBg()})` }}
    >
      <div className="mw py-5 px-3 px-sm-5">
        <div
          className="w-100 banner d-flex justify-content-center"
          ref={animate}
        >
          {Display(props)}
        </div>
      </div>
    </div>
  );
};

export default FirstHomepage;
