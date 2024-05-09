import React, { useContext } from "react";

const Total = ({ title, user, displayAmount, displayPersonAmount }) => {
  return (
    <div className="flex justify-between">
      <div>
        <p>{title}</p>
        <span className="text-Grayish_cyan">{user}</span>
      </div>
      <div>
        <span id="amount" className="text-4xl text-Strong_cyan font-semibold">
          {displayAmount}
          {displayPersonAmount}
        </span>
      </div>
    </div>
  );
};

export default Total;
