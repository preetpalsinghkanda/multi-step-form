import React from "react";

const Button = ({ btnName, btnBgColor, btnTextColor }) => {
  return (
    <button
      className={`${btnBgColor} font-[500] cursor-pointer my-4 w-fit ${btnTextColor} rounded-lg px-6 py-3 self-end`}
    >
      {btnName}
    </button>
  );
};

export default Button;
