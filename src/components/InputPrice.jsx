import React, { useContext } from "react";
import TipContext from "./Context-api/TipContext";

const InputPrice = ({ logo, title }) => {
  const { billInput, getuserData, triggerError } = useContext(TipContext);

  return (
    <div className="w-full">
      <p className="text-Very_dark_cyan font-semibold mb-2">{title}</p>
      <div className=" bg-Very_light_grayish_cyan justify-between rounded-md relative">
        <img
          className="absolute top-[15px] left-[20px]"
          src={logo}
          alt={logo}
        />
        <input
          id={triggerError ? "error" : "input"}
          value={billInput}
          onChange={(event) => getuserData(event.target.value)}
          className={`cursor w-full text-right text-Very_dark_cyan font-semibold text-2xl  bg-Very_light_grayish_cyan outline-none py-2 pr-5`}
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default InputPrice;
