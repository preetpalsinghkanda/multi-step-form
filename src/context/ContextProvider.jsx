import MultiFormContext from "./Context";
import React, { useState } from "react";

const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  // step 1

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  function handleNextbtn() {
    if (step === 1) {
    }
  }

  return (
    <MultiFormContext.Provider
      value={{
        step,
        setStep,
        name,
        setName,
        email,
        setEmail,
        phoneNo,
        setPhoneNo,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};

export default ContextProvider;
