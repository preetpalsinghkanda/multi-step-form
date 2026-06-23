import MultiFormContext from "./Context";
import React, { useState } from "react";

const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  return (
    <MultiFormContext.Provider value={{ step, setStep }}>
      {children}
    </MultiFormContext.Provider>
  );
};

export default ContextProvider;
