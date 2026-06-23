import React, { useContext } from "react";
import MultiFormContext from "../../../context/Context";

const Plan = ({ planImg, planName, planPrice, id }) => {
  const { monthlyPlan, plan, setPlan } = useContext(MultiFormContext);

  return (
    <div
      onClick={() => {
        setPlan(id);
      }}
      className={`border-2  cursor-pointer ${plan === id ? "border-[hsl(243,100%,62%)] bg-[hsl(250,100%,99%)]" : "border-[#8080803c]"}    py-3.5 px-4 flex flex-col gap-9.5 rounded-lg`}
    >
      <div>
        <img src={planImg} alt="" />
      </div>
      <div className="">
        <h6 className="text-lg text-[hsl(213,96%,18%)] font-[500]">
          {planName}
        </h6>
        <p className="text-[hsl(231,11%,63%)]">${planPrice}/mo</p>
        {!monthlyPlan && (
          <p className="text-[13px] my-0.5 font-[500] text-[hsl(213,96%,18%)]">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default Plan;
