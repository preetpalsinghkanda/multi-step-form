import React from "react";

const Input = ({ type, inputName, inputPlaceHolder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputName}
        className="text-[16px] font-[500] text-[hsl(213,95%,25%)]"
      >
        {inputName}
      </label>
      <input
        type={type}
        id={inputName}
        className="border-2 font-[600] placeholder:font-[600] placeholder:text-[#00000044] rounded-lg border-[#9699ab58] px-4 py-2.5 outline-hidden"
        placeholder={inputPlaceHolder}
      />
    </div>
  );
};

export default Input;
