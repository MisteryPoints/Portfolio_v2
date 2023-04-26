import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light px-28 py-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
