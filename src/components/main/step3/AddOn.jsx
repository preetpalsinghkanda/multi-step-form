import React, { useContext } from "react";
import MultiFormContext from "../../../context/Context";

const AddOn = ({ addOnName, addOnBio, addOnPrice, checked, name }) => {
  const { monthlyPlan, setChecked } = useContext(MultiFormContext);
  return (
    <div
      onClick={() => {
        setChecked((p) => ({
          ...p,
          [name]: !p[name],
        }));
      }}
      className={`border-2 ${checked ? "border-[hsl(243,100%,62%)]" : "border-[#80808034]"} px-3    sm:px-6 items-center py-3.5 rounded-lg justify-between flex`}
    >
      <div className="flex sm:gap-5 gap-3 items-center">
        <input
          checked={checked}
          type="checkbox"
          style={{
            height: "16px",
            width: "16px",
            accentColor: "#453FFB",
          }}
          className="rounded-lg border border-[#80808034]"
        />
        <div>
          <h5 className="font-[600] sm:text-[17px]  text-[15px] text-[#002556]">
            {addOnName}
          </h5>
          <p className="sm:text-[15px] text-[12px] font-[500] text-[#9699AB]">
            {addOnBio}
          </p>
        </div>
      </div>
      <span className="text-[hsl(243,100%,62%)] sm:text-md text-sm font-[500]">
        +${addOnPrice}/{monthlyPlan ? "mo" : "yr"}
      </span>
    </div>
  );
};

export default AddOn;
