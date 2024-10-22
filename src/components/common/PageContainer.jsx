import React from "react";

const PageContainer = ({ children, className }) => {
  return <div className={`max-w-[1400px] m-auto ${className}`}>{children}</div>;
};

export default PageContainer;
