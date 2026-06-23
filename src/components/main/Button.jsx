import React, { useContext } from "react";
import MultiFormContext from "../../context/Context";

const Button = ({ btnName, btnBgColor, btnTextColor, btnPx, btnNext }) => {
  const { step, setStep, handleNextBtn } = useContext(MultiFormContext);

  return (
    <button
      onClick={() => {
        if (btnNext === "next") {
          handleNextBtn();
        }else{
          setStep((back)=> back - 1);
        }
      }}
      className={`${btnBgColor}  ${btnNext === "next" ? "hover:bg-[#174A8A]" : ""}    font-[500] cursor-pointer my-4 w-fit ${btnTextColor} rounded-lg ${btnPx}  py-3 self-end`}
    >
      {btnName}
    </button>
  );
};

export default Button;
