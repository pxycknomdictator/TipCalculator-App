import React from "react";

const Total = ({ title, user }) => {
  return (
    <div className="flex justify-between">
      <div>
        <p>{title}</p>
        <span className="text-Grayish_cyan">{user}</span>
      </div>
      <div>
        <span id="amount" className="text-4xl text-Strong_cyan font-semibold">
          0.00
        </span>
      </div>
    </div>
  );
};

export default Total;
