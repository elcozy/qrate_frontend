import React from "react";
export default function Slide6() {
  return (
    <div className="wrapper bg-indigo" id="16">
      <div className="mw py-5 px-3 px-sm-5 py-5 py-md-auto">
        <div className="about d-flex flex-column justify-content-center align-items-center text-light px-4 px-sm-5 px-md-auto mwm">
          <h3 className="font-weight-bold mb-4 mb-md-5 text-center">
            You should know how stuff works
          </h3>
          <p className="text-justify text-md-center">
            Once you create an account, you get to select from a list of art
            category to add to your feed. See something you like? Retweet it to
            make it your own. Add comments if you want. Others would do the same
            to yours. That's how it works here.
          </p>
          <div className="row works pb-0">
            <div className="col-md-9 d-flex mx-auto mt-3">
              <div className="col-4 p-0 p-md-block my-auto">
                <img
                  className="img-reduce-size"
                  src="/images/homepage/screenshot.png"
                  alt="Art"
                />
              </div>
              <div className="col-4 p-0 p-md-block my-auto">
                <img
                  className="w-100 h-auto"
                  src="/images/homepage/2.png"
                  alt="Art"
                />
              </div>
              <div className="col-4 p-0 p-md-block my-auto">
                <img
                  className="img-reduce-size left"
                  src="/images/homepage/3.png"
                  alt="Art"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
