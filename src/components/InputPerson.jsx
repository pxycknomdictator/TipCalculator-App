import React, { useContext } from "react";
import TipContext from "./Context-api/TipContext";

const InputPerson = ({ logo, title }) => {
  const { personsInput, getPersonsData, secondTrigger } =
    useContext(TipContext);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p className="text-Very_dark_cyan font-semibold mb-2">{title}</p>
        {secondTrigger ? (
          <p id="color" className="font-semibold">
            Can't be Zero
          </p>
        ) : null}
      </div>
      <div className=" bg-Very_light_grayish_cyan justify-between rounded-md relative">
        <img
          className="absolute top-[15px] left-[20px]"
          src={logo}
          alt={logo}
        />
        <input
          id={secondTrigger ? "error" : "input"}
          value={personsInput}
          onChange={(event) => getPersonsData(event.target.value)}
          className={`cursor w-full text-right text-Very_dark_cyan font-semibold text-2xl  bg-Very_light_grayish_cyan outline-none py-2 pr-5`}
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default InputPerson;
