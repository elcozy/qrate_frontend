import React from "react";
export default function Slide3() {
  return (
    <div className="wrapper bg-explore-art" id="13">
      <div className="mw py-5 px-3 px-sm-5 px-sm-5 py-5 py-md-auto container">
        <div className="about d-flex flex-column justify-content-center align-items-center text-light text-center px-4 px-sm-5 px-md-auto mwm">
          <div className="d-none d-sm-flex justify-content-between align-items-center w-100 mb-md-4">
            <img
              className="artDesign"
              src="/images/homepage/left.png"
              alt="Left design"
            />
            <img
              className=""
              src="/images/homepage/qrate-light-logo.png"
              alt="Logo"
            />
            <img
              className="artDesign"
              src="/images/homepage/right.png"
              alt="Right design"
            />
          </div>

          <p className="font-weight-bold explorer">
            You've Come to Explore The Beauty of Art
          </p>
          <p className="">
            Qrate an app that connects visual artists (drawings, paintings,
            digital artists, calligraphy artists, photographers, etc) to
            buyers/clients who can purchase their work or commission them to do
            new work.
          </p>
        </div>
      </div>
    </div>
  );
}
