import React from "react";

const AddOn = ({addOnName ,addOnBio , addOnPrice}) => {
  return (
    <div className="border-2 border-[hsl(243,100%,62%)]  px-6 items-center py-3.5 rounded-lg justify-between flex">
      <div className="flex gap-5 items-center">
        <input
          type="checkbox"
          style={{ height: "16px", width: "16px", accentColor: "#453FFB" }}
          className="rounded-lg "
        />
        <div>
          <h5 className="font-[600] text-[17px] text-[#002556]">
            {addOnName}
          </h5>
          <p className="text-[15px] font-[500] text-[#9699AB]">
            {addOnBio}
          </p>
        </div>
      </div>
      <span className="text-[hsl(243,100%,62%)] font-[500]">+${addOnPrice}/mo</span>
    </div>
  );
};

export default AddOn;
