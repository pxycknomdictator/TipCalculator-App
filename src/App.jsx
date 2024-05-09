import React from "react";
import Calculator from "./components/Calculator";
import TipContextProvider from "./components/Context-api/TipContextProvider.jsx";

const App = () => {
  return (
    <TipContextProvider>
      <Calculator />
    </TipContextProvider>
  );
};

export default App;
