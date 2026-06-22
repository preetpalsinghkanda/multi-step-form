import React from "react";

const StepHeading = () => {
  return (
    <div className="my-10  flex flex-col gap-2">
      <h2 className="text-3xl text-[hsl(213,96%,18%)] font-[700]">
        Personal info
      </h2>
      <p className="text-[hsl(231,11%,63%)]">
        Please provide your name, email address, and phone number.
      </p>
    </div>
  );
};

export default StepHeading;
