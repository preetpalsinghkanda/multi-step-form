import React, { useContext } from "react";
import MultiFormContext from "../../context/Context";

const Step = ({ stepNo, stepName }) => {
  const { step } = useContext(MultiFormContext);
  return (
    <div className="flex  gap-4 items-center">
      <span
        className={` ${Number(stepNo) === step ? "bg-[hsl(206,94%,87%)] hsl(213, 96%, 18%)" : "border-[#ffffff8b] border-2 text-white"}  text-[16px]  font-[600] h-9 w-9 rounded-full flex items-center justify-center`}
      >
        {stepNo}
      </span>
      <div className="leading-5 hidden md:flex md:flex-col">
        <p className="text-[#ffffffb3] text-sm">STEP {stepNo}</p>
        <p className="font-[500] tracking-[1px] text-md text-[hsl(0,100%,100%)]">
          {stepName}
        </p>
      </div>
    </div>
  );
};

export default Step;
