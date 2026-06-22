import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Input from "./main/step1/Input";
import Button from "./main/Button";
import StepHeading from "./main/StepHeading";
import AllInputs from "./main/step1/AllInputs.jsx";

const Hero = () => {
  return (
    <div className=" flex p-4 gap-25 rounded-xl bg-white max-w-4xl mx-auto w-full">
      <SideBar />

      <div className=" flex flex-col justify-between">
        <div>
          <div>
            <StepHeading />
          </div>

          <AllInputs/>
        </div>

        <Button btnName={"Next Step"} />
      </div>
    </div>
  );
};

export default Hero;
