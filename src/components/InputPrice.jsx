import React from "react";

const InputPrice = ({ logo, title }) => {
  return (
    <div className="w-full bg-orange-500">
      <p className="text-Very_dark_cyan font-semibold mb-2">{title}</p>
      <div className=" bg-Very_light_grayish_cyan justify-between rounded-md relative">
        <img
          className="absolute top-[15px] left-[20px]"
          src={logo}
          alt={logo}
        />
        <input
          id="input"
          className={`w-full text-right text-Very_dark_cyan font-semibold text-2xl  bg-Very_light_grayish_cyan outline-none py-2 pr-5`}
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default InputPrice;
