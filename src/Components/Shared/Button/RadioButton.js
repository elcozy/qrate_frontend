import React from "react";
import "./RadioButton.scss";
export function LeftRadioButton({ buttonLabel }) {
  return (
    <label className="form-check-label radio">
      {buttonLabel}
      <input
        type="radio"
        id="pay-delivery"
        name="payment-method"
        value="delivery"
      />
      <span className="checkround"></span>
    </label>
  );
}
export function RightRadioButton({ buttonLabel }) {
  return (
    <label className="form-check-label right-radio">
      {buttonLabel}
      <input
        type="radio"
        id="pay-delivery"
        name="payment-method"
        value="delivery"
      />
      <span className="checkround"></span>
    </label>
  );
}
