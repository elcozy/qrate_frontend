import React from "react";
import "./CustomCheckbox.scss";
export function CustomCheckbox({ name, id }) {
  return (
    <div class="custom-checkbox">
      <input
        class="inp-checkboxx"
        id={id}
        type="checkbox"
        style={{
          display: "none",
        }}
      />
      <label class="checkboxx" for={id}>
        <span>
          <svg width="12px" height="10px" viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{name}</span>
      </label>
    </div>
  );
}
