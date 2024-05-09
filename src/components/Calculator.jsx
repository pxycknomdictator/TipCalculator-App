import React, { useContext } from "react";
import InputPrice from "./InputPrice.jsx";
import Logo from "./Logo.jsx";
import CustomerLogo from "../assets/images/icon-person.svg";
import dollar from "../assets/images/icon-dollar.svg";
import Percentage from "./Percentage.jsx";
import Custom from "./Custom.jsx";
import data from "./data/Data.json";
import Total from "./Total.jsx";
import InputPerson from "./InputPerson.jsx";
import TipContext from "./Context-api/TipContext.js";

const Calculator = () => {
  const { displayAmount, displayPersonAmount, resetAll } =
    useContext(TipContext);

  return (
    <div className="w-screen h-screen flex justify-center md:items-center overflow-auto">
      <div className="mt-12 md:mt-0 w-[85%] md:w-[45rem] lg:w-[50rem] mx-auto">
        <Logo />

        <div className="bg-White rounded-2xl p-4 grid md:grid-cols-2 mt-9 gap-7">
          <div className="rounded-lg p-[.3rem]">
            <InputPrice logo={dollar} title="Bill" />
            <div className="my-6">
              <p className="mb-2 text-Very_dark_cyan font-semibold">
                Select Tip %
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.map((elements, index) => (
                  <Percentage key={index} tips={elements} />
                ))}
                <Custom />
              </div>
            </div>
            <InputPerson logo={CustomerLogo} title={"Number of persons"} />
          </div>

          <div className="bg-Very_dark_cyan rounded-xl text-White pt-10 pb-7 px-6 flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-4">
              <Total
                title="Tip Amount"
                user="/ Person"
                displayAmount={displayAmount}
              />
              <Total
                title="Total"
                user="/ Person"
                displayPersonAmount={displayPersonAmount}
              />
            </div>
            <button
              id="reset"
              onClick={resetAll}
              className="bg-Strong_cyan text-Very_dark_cyan font-semibold text-2xl py-1 rounded-md hover:bg-Light_grayish_cyan"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
