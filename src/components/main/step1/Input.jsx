import React from "react";

const Input = ({ type, inputName, inputPlaceHolder, inputValue, change }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-end">
        <label
          htmlFor={inputName}
          className="text-[16px] font-[500] text-[hsl(213,95%,25%)]"
        >
          {inputName}
        </label>
        <p className="text-[14px] font-[600] text-[hsl(354,84%,57%)]">
          The field is required
        </p>
      </div>
      <input
        onChange={(x) => change(x.target.value)}
        value={inputValue}
        type={type}
        id={inputName}
        className="border-2 focus:border-[hsl(243,100%,62%)] text-[hsl(213,96%,18%)]  cursor-pointer font-[600] placeholder:font-[600] placeholder:text-[#00000044] rounded-lg border-[#9699ab58] px-4 py-2.5 outline-hidden"
        placeholder={inputPlaceHolder}
      />
    </div>
  );
};

export default Input;
