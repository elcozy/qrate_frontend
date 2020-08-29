import React from "react";

export const Content = ({ children, className }) => (
  <Content className={`main content w-auto py-4 ${className}`}>
    {children}
  </Content>
);
