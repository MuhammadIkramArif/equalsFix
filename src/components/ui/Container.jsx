import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8">{children}</div>
  );
};

export default Container;
