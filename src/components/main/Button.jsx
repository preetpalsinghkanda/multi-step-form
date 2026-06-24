import React, { useContext } from "react";
import MultiFormContext from "../../context/Context";

const Button = ({ btnName, btnBgColor, btnTextColor, btnPx, btnNext , btnHoverColor }) => {
  const { step, setStep, handleNextBtn } = useContext(MultiFormContext);

  return (
    <button
      onClick={() => {
        if (btnNext === "next") {
          handleNextBtn();
        } else {
          setStep((back) => back - 1);
        }
      }}
      className={`${btnBgColor} ${btnHoverColor} ${btnNext === "next" ? "hover:bg-[#174A8A]" : "hover:text-[#02295A]"}    font-[600] cursor-pointer my-4 w-fit ${btnTextColor} rounded-lg ${btnPx}  py-3 self-end`}
    >
      {btnName}
    </button>
  );
};

export default Button;
