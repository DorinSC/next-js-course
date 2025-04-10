import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>root</h1>
      <div>{children}</div>
    </>
  );
};

export default Layout;
