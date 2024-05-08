import React from "react";
import InputPrice from "./InputPrice.jsx";
import Logo from "./Logo.jsx";
import CustomerLogo from "../assets/images/icon-person.svg";
import dollar from "../assets/images/icon-dollar.svg";

const Calculator = () => {
  return (
    <div
      id="mainBody"
      className="w-screen h-screen bg-Light_grayish_cyan flex items-center justify-center"
    >
      <div id="container" className="w-[50rem]">

        <Logo />

        <div
          id="calculatorBody"
          className="bg-White rounded-lg p-4 grid grid-cols-2 mt-9"
        >
          <div id="calculationPart" className="rounded-lg p-[.3rem]">
            <InputPrice logo={dollar} title="Bill" />
            <InputPrice logo={CustomerLogo} title="Number of People" />
          </div>

          <div id="summaryPart">
            <h1>right part</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
