import React, { useContext } from "react";
import Plan from "./Plan";
import arcadeIcon from "../../../assets/icon-arcade.svg";
import advancedIcon from "../../../assets/icon-advanced.svg";
import proIcon from "../../../assets/icon-pro.svg";
import MultiFormContext from "../../../context/Context";

const AllPlans = () => {
  const { monthlyPlan } = useContext(MultiFormContext);
  return (
    <section className=" grid grid-cols-3 gap-4">
      <Plan
        planImg={arcadeIcon}
        planName={"Arcade"}
        planPrice={`${monthlyPlan ? "9" : "90"}`}
        id={"Arcade"}
      />
      <Plan
        planImg={advancedIcon}
        planName={"Advanced"}
        planPrice={`${monthlyPlan ? "12" : "120"}`}
        id={"Advanced"}
      />
      <Plan
        planImg={proIcon}
        planName={"Pro"}
        planPrice={`${monthlyPlan ? "15" : "150"}`}
        id={"Pro"}
      />
    </section>
  );
};

export default AllPlans;
