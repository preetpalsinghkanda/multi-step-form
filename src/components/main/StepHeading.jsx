import React from "react";

const StepHeading = ({headingName , headingPara}) => {
  return (
    <div className="md:my-10  my-4 flex flex-col gap-2">
      <h2 className="text-[32px] text-[hsl(213,96%,18%)] font-[700]">
        {headingName}
      </h2>
      <p className="text-[hsl(231,11%,63%)]">
        {headingPara}
      </p>
    </div>
  );
};

export default StepHeading;
