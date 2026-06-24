import React, { useContext } from "react";
import AddOn from "./AddOn";
import MultiFormContext from "../../../context/Context";

const AllAddOns = () => {
  const { monthlyPlan, checked } = useContext(MultiFormContext);
  return (
    <div className="flex  flex-col md:gap-4 gap-3">
      <AddOn
        name={"online"}
        addOnName={"Online service"}
        addOnPrice={`${monthlyPlan ? "1" : "10"}`}
        addOnBio={"Access to multiplayer games"}
        checked={checked.online}
      />

      <AddOn
        name={"larger"}
        addOnName={"Larger storage"}
        addOnBio={"Extra 1TB of cloud save"}
        addOnPrice={`${monthlyPlan ? "2" : "20"}`}
        checked={checked.larger}
      />

      <AddOn
        name={"customize"}
        addOnName={"Customizable profile"}
        addOnBio={"Custom theme on your profile"}
        addOnPrice={`${monthlyPlan ? "2" : "20"}`}
        checked={checked.customize}
      />
    </div>
  );
};

export default AllAddOns;
