import React from "react";

const InputPrice = ({ logo, title }) => {
  return (
    <div className="w-full bg-orange-500">
      <p className="text-Very_dark_cyan font-semibold mb-2">{title}</p>
      <div className="flex items-center  bg-Very_light_grayish_cyan justify-between py-2 pr-4 pl-4 rounded-md">
        <img className="w-[4%]" src={logo} alt={logo} />
        <input
          className="w-[96%] text-right text-Very_dark_cyan font-semibold text-2xl  bg-Very_light_grayish_cyan outline-none placeholder:text-Very_dark_cyan"
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default InputPrice;
