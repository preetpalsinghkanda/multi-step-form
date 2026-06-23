import React, { useContext } from "react";
import Input from "./Input";
import MultiFormContext from "../../../context/Context";

const AllInputs = () => {
  const { name, setName, email, setEmail , phoneNo , setPhoneNo} = useContext(MultiFormContext);
  return (
    <div className="flex flex-col gap-6">
      <Input
        change={setName}
        inputValue={name}
        type={"text"}
        inputName={"Name"}
        id={"name"}
        inputPlaceHolder={"e.g. Stephen King"}
      />
      <Input
        change={setEmail}
        inputValue={email}
        type={"text"}
        inputName={"Email Address"}
        id={"email"}
        inputPlaceHolder={"e.g. stephenking@lorem.com"}
      />

      <Input
      change={setPhoneNo}
      inputValue={phoneNo}
        type={"tel"}
        id={"phoneNo"}
        inputName={"Phone Number"}
        inputPlaceHolder={"e.g. +1 234 567 890"}
      />
    </div>
  );
};

export default AllInputs;
