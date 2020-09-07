import React from "react";
export default function Slide6() {
  return (
    <div className="wrapper bg-green" id="16">
      <div className="mw py-5 px-3 px-sm-5 pt-5 h-100 galleryDiv">
        <div className="d-flex justify-content-center text-light px-4 px-sm-5 px-md-auto">
          <div className="row">
            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <h3 className="mb-2">Qrate Is Catalogues!</h3>
              <p className="text-justify text-md-left">
                With Qrate, you can save your favorite art pieces in your
                personal catalogues when exploring so that you can look through
                them later.
              </p>
            </div>
            <div className="col-lg-8 text-right">
              <img
                className="img-reduce-size"
                src="/images/homepage/desktopGReen.svg"
                alt="Art"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
