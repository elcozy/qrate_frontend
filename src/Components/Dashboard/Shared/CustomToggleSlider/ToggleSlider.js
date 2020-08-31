import React from "react";
import "./ToggleSlider.scss";
export function ToggleSlider({ id }) {
  return (
    <div class="custom--checkbox">
      <input
        type="checkbox"
        id={id}
        style={{
          display: "none",
        }}
      />
      <label for={id} class="toggle">
        <span></span>
      </label>
    </div>
  );
}
