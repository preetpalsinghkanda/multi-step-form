import React, { useContext } from "react";
import AllPlans from "./AllPlans";
import MultiFormContext from "../../../context/Context";

const FullPlan = () => {
  const { monthlyPlan, setMonthlyPlan } = useContext(MultiFormContext);
  return (
    <div className=" flex flex-col gap-8">
      <AllPlans />

      <div className=" py-3 rounded-lg  bg-[hsl(250,100%,99%)] flex items-center justify-center gap-6">
        <p
          className={`${monthlyPlan ? "text-[#042859]" : "text-[#80808087]"}  font-[600]`}
        >
          Monthly
        </p>

        <button
          onClick={() => {
            setMonthlyPlan(!monthlyPlan);
          }}
          className={`w-10 cursor-pointer   ${monthlyPlan ? "justify-start" : "justify-end"}   h-5 bg-[#02295A] rounded-full flex items-center px-1`}
        >
          <div
            className={`w-3 ${monthlyPlan ? "translate-x-0" : "translate-x--1"} h-3  bg-white rounded-full`}
          ></div>
        </button>

        <p
          className={`font-[600] ${monthlyPlan ? "text-[#80808087]" : "text-[#042859]"}  `}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default FullPlan;
