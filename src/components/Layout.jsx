import React from "react";
import NavPrincipal from "./Nav/NavPrincipal";

const Layout = ({ children }) => {
  return (
    <>
      <NavPrincipal />
      {children}
      <div>footer</div>
    </>
  );
};

export default Layout;
