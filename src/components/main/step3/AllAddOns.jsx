import React from "react";
import AddOn from "./AddOn";

const AllAddOns = () => {
  return (
    <div className="flex  flex-col gap-4">
      <AddOn
        addOnName={"Online service"}
        addOnPrice={"1"}
        addOnBio={"Access to multiplayer games"}
      />

      <AddOn
        addOnName={"Larger storage"}
        addOnBio={"Extra 1TB of cloud save"}
        addOnPrice={"2"}
      />

      <AddOn
        addOnName={"Customizable profile"}
        addOnBio={"Custom theme on your profile"}
        addOnPrice={"2"}
      />
    </div>
  );
};

export default AllAddOns;
