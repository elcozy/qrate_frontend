import React from "react";
export function Slide3({}) {
  return (
    <div className="wrapper bg-explore-art" id="13">
      <div className="mw py-5 px-3 px-sm-5 px-sm-5 py-5 py-md-auto">
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

          <p className="font-weight-bold explore">
            You've Come to Explore The Beauty of Art
          </p>
          <p className="">
            Qrate is the easiest way to admire art you love and even buy it for
            your wall or as a gift
          </p>
        </div>
      </div>
    </div>
  );
}
