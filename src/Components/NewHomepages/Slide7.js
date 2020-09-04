import { Link } from "react-router-dom";
import React from "react";
export default function Slide7(props) {
  return (
    <div className="wrapper bg-black" id="17">
      <div className="mx-auto py-5 px-3 px-sm-5 banner">
        <div className="hh d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center px-3 px-md-0">
            <div className="text-center text-light mb-2 mb-md-6">
              <h4 className="font-weight-bold mb-4">
                This can be life-changing for you
              </h4>
              <p className="lead px-3">
                As an artist, Qrater or Art Supplier.
                <br />
                Do not hold back, you need this.
              </p>
            </div>
            <div className="w-100 px-2">
              <button
                className="btn bg-orange text-light my-2 btn-lg w-100"
                id="getStarted"
                onClick={() => props.onClick("GetStarted", "FirstPage")}
              >
                Get Started
              </button>
              <button
                className="btn bg-white text-orange my-2 btn-lg w-100"
                onClick={() => props.onClick("ConfirmEmail", "FirstPage")}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm-left">
          <Link className="text-light mx-2" to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-light mx-2" to="/dashboard/gallery">
            Gallery
          </Link>
          <Link className="text-light mx-2" to="/dashboard/categories">
            Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
