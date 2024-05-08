import React from "react";
import InputPrice from "./InputPrice.jsx";
import Logo from "./Logo.jsx";
import CustomerLogo from "../assets/images/icon-person.svg";
import dollar from "../assets/images/icon-dollar.svg";
import Percentage from "./Percentage.jsx";
import Custom from "./Custom.jsx";
import data from "./data/Data.json";
import Total from "./Total.jsx";

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
          className="bg-White rounded-lg p-4 grid grid-cols-2 mt-9 gap-7"
        >
          <div id="calculationPart" className="rounded-lg p-[.3rem]">
            <InputPrice logo={dollar} title="Bill" />
            <div className="my-6">
              <p className="mb-2 text-Very_dark_cyan font-semibold">
                Select Tip %
              </p>
              <div
                id="percentContainer"
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {data.map((elements, index) => (
                  <Percentage key={index} tips={elements} />
                ))}
                <Custom />
              </div>
            </div>
            <InputPrice logo={CustomerLogo} title="Number of People" />
          </div>

          <div
            id="summaryPart"
            className="bg-Very_dark_cyan rounded-xl text-White pt-10 pb-7 px-6 flex flex-col justify-between"
          >
            <Total />
            <button id="reset" className="bg-Strong_cyan text-Very_dark_cyan font-semibold text-2xl py-1 rounded-md hover:bg-Light_grayish_cyan">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
