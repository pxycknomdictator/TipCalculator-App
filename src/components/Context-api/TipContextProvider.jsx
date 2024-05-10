import React, { useState } from "react";
import TipContext from "./TipContext.js";

const TipContextProvider = ({ children }) => {
  const [triggerError, setTriggerError] = useState(false);
  const [secondTrigger, setsecondTrigger] = useState(false);
  const [billInput, setBillInput] = useState("");
  const [personsInput, setPersonsInput] = useState("");
  const [custom, setCustoms] = useState("");
  const [displayAmount, setDisplayAmount] = useState(0);
  const [displayPersonAmount, setDisplayPersonAmount] = useState(0);

  const CallError = () => {
    setsecondTrigger(true);
  };

  const getuserData = (amount) => {
    const stringToNumber = Number.parseFloat(amount);
    if (isNaN(stringToNumber)) {
      setBillInput("");
      setTriggerError(true);
    } else if (stringToNumber === 0) {
      setTriggerError(true);
    } else {
      setBillInput(stringToNumber);
      setTriggerError(false);
    }
  };

  const getPersonsData = (persons) => {
    const stringToNumber = Number.parseFloat(persons);
    if (isNaN(stringToNumber)) {
      setPersonsInput("");
      CallError();
    } else if (stringToNumber === 0) {
      CallError();
    } else {
      setPersonsInput(stringToNumber);
      setsecondTrigger(false);
    }
  };

  const getPercentageData = (percentages) => {
    const stringToNumber = Number.parseFloat(percentages);
    const tipAmount = (billInput * stringToNumber) / 100;
    const TotalAmount = billInput + tipAmount;

    if (personsInput === "") {
      return CallError();
    }

    const singlePersonAmount = TotalAmount / personsInput;
    setDisplayAmount(singlePersonAmount.toFixed(2));

    const singlePersonTip = tipAmount / personsInput;
    setDisplayPersonAmount(singlePersonTip.toFixed(2));
  };

  const customHandler = (customValues) => {
    const stringToNumber = Number.parseFloat(customValues);
    const tipAmount = (billInput * stringToNumber) / 100;
    const TotalAmount = billInput + tipAmount;
    const singlePersonAmount = TotalAmount / personsInput;
    setDisplayAmount(singlePersonAmount.toFixed(2));

    const singlePersonTip = tipAmount / personsInput;
    setDisplayPersonAmount(singlePersonTip.toFixed(2));

    if (isNaN(stringToNumber)) {
      setCustoms("");
    } else if (stringToNumber > 100) {
      setCustoms("");
      setDisplayAmount("0");
      setDisplayPersonAmount("0");
    } else if (personsInput === "") {
      return CallError();
    } else {
      setCustoms(stringToNumber);
      setsecondTrigger(false);
    }
  };

  const resetAll = () => {
    setBillInput("");
    setPersonsInput("");
    setDisplayAmount("0");
    setDisplayPersonAmount("0");
    setCustoms("Custom")
  };

  return (
    <TipContext.Provider
      value={{
        billInput,
        personsInput,
        getuserData,
        getPersonsData,
        getPercentageData,
        triggerError,
        secondTrigger,
        displayAmount,
        displayPersonAmount,
        custom,
        customHandler,
        resetAll,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContextProvider;
