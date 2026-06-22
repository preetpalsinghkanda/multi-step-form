import React from "react";

const Plan = ({ planImg, planName, planPrice }) => {
  return (
    <div className="border-2 bg-[hsl(250,100%,99%)] border-[hsl(243,100%,62%)] py-3.5 px-4 flex flex-col gap-9.5 rounded-lg">
      <div>
        <img src={planImg} alt="" />
      </div>
      <div className="">
        <h6 className="text-lg text-[hsl(213,96%,18%)] font-[500]">
          {planName}
        </h6>
        <p className="text-[hsl(231,11%,63%)]">${planPrice}/mo</p>
      </div>
    </div>
  );
};

export default Plan;
