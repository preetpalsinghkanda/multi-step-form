import React, { useContext } from "react";
import MultiFormContext from "../../context/Context";

const Button = ({ btnName, btnBgColor, btnTextColor, btnPx, btnNext }) => {
  const { step, setStep } = useContext(MultiFormContext);

  return (
    <button
      onClick={() => {
        if (step >= 1 && step < 5) {
          setStep(step + (btnNext === "next" ? 1 : -1));
        }
        console.log(step);
      }}
      className={`${btnBgColor}   font-[500] cursor-pointer my-4 w-fit ${btnTextColor} rounded-lg ${btnPx}  py-3 self-end`}
    >
      {btnName}
    </button>
  );
};

export default Button;
