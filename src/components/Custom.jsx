import React, { useContext } from "react";
import TipContext from "./Context-api/TipContext";

const Custom = () => {
  const { custom, customHandler } = useContext(TipContext);

  return (
    <div>
      <input
        id="customBox"
        value={custom}
        onChange={(event) => customHandler(event.target.value)}
        className="cursor w-full h-full text-center bg-Light_grayish_cyan placeholder:text-Very_dark_cyan font-semibold text-2xl rounded-md outline-none"
        type="text"
        placeholder="Custom"
      />
    </div>
  );
};

export default Custom;
