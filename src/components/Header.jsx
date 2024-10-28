import React from "react";
import image from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <>
      <header id="header">
        <img src={image} alt="logo image" />
        <h1>React investment calculator</h1>
      </header>
    </>
  );
};

export default Header;
