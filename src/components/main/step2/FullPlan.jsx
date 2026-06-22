import React from "react";
import AllPlans from "./AllPlans";

const FullPlan = () => {
  return (
    <div className=" flex flex-col gap-8">
      <AllPlans />

      <div className=" py-3 rounded-lg  bg-[hsl(250,100%,99%)] flex items-center justify-center gap-6">
        <p className="text-[] font-[600]">Monthly</p>

        <button className="w-10  h-5 bg-[#02295A] rounded-full flex items-center px-1">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </button>

        <p className="font-[600]">Yearly</p>
      </div>
    </div>
  );
};

export default FullPlan;
