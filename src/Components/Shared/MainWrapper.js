import React from "react";

const MainWrapper = ({ children, className }) => (
  <div className={`main content w-auto py-4 ${className}`}>{children}</div>
);
export default MainWrapper;
