import React from "react";

const Percentage = ({ tips }) => {
  return (
    <span
      id="percentBox"
      className="percent text-2xl font-semibold bg-Very_dark_cyan text-White text-center py-2 rounded-md hover:bg-Strong_cyan hover:text-Very_dark_cyan"
    >
      {tips}
    </span>
  );
};

export default Percentage;
