import React from "react";

import "./Input.style.scss";

const Input = ({ inputName, placeholder, onChange }) => {
  return (
    <input
      className="input"
      type={inputName}
      placeholder="Search"
      onChange={onChange}
    />
  );
};

export default Input;
