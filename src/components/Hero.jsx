import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Input from "./main/step1/Input";
import Button from "./main/Button";
import StepHeading from "./main/StepHeading";
import AllInputs from "./main/step1/AllInputs.jsx";
import Plan from "./main/step2/Plan.jsx";
import FullPlan from "./main/step2/FullPlan.jsx";

const Hero = () => {
  return (
    <div className=" flex p-4 gap-25  rounded-xl bg-white max-w-4xl mx-auto w-full">
      <SideBar />

      <div className=" flex flex-col justify-between">
        <div>
          <div>
            <StepHeading
              headingName={"Personal info"}
              headingPara={
                "Please provide your name, email address, and phone number."
              }
            />
          </div>

          {/* <AllInputs /> */}
          <FullPlan />
        </div>

        <div className=" flex items-center justify-between"><Button btnName={"Go Back"} btnBgColor={""} btnTextColor={"text-[hsl(235,5%,61%)]"}/><Button btnName={"Next Step"} btnBgColor={"bg-[hsl(213,96%,18%)]"} btnTextColor={"text-white"} /></div>
      </div>
    </div>
  );
};

export default Hero;
