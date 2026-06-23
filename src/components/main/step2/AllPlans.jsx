import React from "react";
import Plan from "./Plan";
import arcadeIcon from "../../../assets/icon-arcade.svg";
import advancedIcon from "../../../assets/icon-advanced.svg";
import proIcon from "../../../assets/icon-pro.svg";

const AllPlans = () => {
  return (
    <section className=" grid grid-cols-3 gap-4">
      <Plan planImg={arcadeIcon} planName={"Arcade"} planPrice={"9"} id={"arcade"} />
      <Plan planImg={advancedIcon} planName={"Advanced"} planPrice={"12"} id={"advance"} />
      <Plan planImg={proIcon} planName={"Pro"} planPrice={"15"} id={"pro"} />
    </section>
  );
};

export default AllPlans;
