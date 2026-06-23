import MultiFormContext from "./Context";
import React, { useState } from "react";

const ContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  // step 1

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [err, setErr] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  function handleStepOne() {
    let tempErr = {
      name: "",
      email: "",
      phoneNo: "",
    };

    let allInputFilled = true;

    if (!name.trim()) {
      tempErr.name = "The field is required";
      allInputFilled = false;
    } else if (name.trim().length < 3) {
      tempErr.name = "Please enter valid name";
      allInputFilled = false;
    }

    if (!email.trim()) {
      tempErr.email = "The field is required";
      allInputFilled = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      tempErr.email = "Please enter valid email";
      allInputFilled = false;
    }

    if (!phoneNo.trim()) {
      tempErr.phoneNo = "The field is required";
      allInputFilled = false;
    } else if (phoneNo.length !== 10) {
      tempErr.phoneNo = "Enter valid phone no";
      allInputFilled = false;
    }

    setErr(tempErr);
    return allInputFilled;
  }

  function handleNextBtn() {
    if (step === 1) {
      if (!handleStepOne()) return;
    }

    setStep((next) => next + 1);
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
        err,
        handleStepOne,
        handleNextBtn,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};

export default ContextProvider;
