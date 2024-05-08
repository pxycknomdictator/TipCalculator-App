import React from "react";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="text-center">
      <img src={logo} className="inline-block" alt="Logo" />
    </div>
  );
};

export default Logo;
