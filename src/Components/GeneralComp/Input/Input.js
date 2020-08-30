import React from "react";

import "./Input.scss";

const Input = ({ inputName, placeholder, onChange, className }) => {
  return (
    <div className={`${className} has-search`}>
      <div>
        <input
          className="general-input"
          type={inputName}
          placeholder={placeholder}
          onChange={onChange}
        />
        <span className="fa fa-search form-control-feedback"></span>
      </div>
    </div>
  );
};

export default Input;
