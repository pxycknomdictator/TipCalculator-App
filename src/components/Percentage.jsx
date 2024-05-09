import React, { useContext } from "react";
import TipContext from "./Context-api/TipContext";

const Percentage = ({ tips }) => {
  const { getPercentageData } = useContext(TipContext);

  return (
    <span
      onClick={(event) => getPercentageData(event.target.innerText)}
      id="percentBox"
      className="percent text-2xl font-semibold bg-Very_dark_cyan text-White text-center py-2 rounded-md hover:bg-Strong_cyan hover:text-Very_dark_cyan"
    >
      {tips}
    </span>
  );
};

export default Percentage;
