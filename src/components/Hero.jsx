import React from "react";
import SideBar from "./SideBar";
import Input from "./Input";

const Hero = () => {
  return (
    <div className=" flex p-4 gap-25 rounded-xl bg-white max-w-4xl mx-auto w-full">
      <SideBar />

      <div className=" flex flex-col justify-between">
        <div>
          <div className="my-10  flex flex-col gap-2">
            <h2 className="text-3xl text-[hsl(213,96%,18%)] font-[700]">
              Personal info
            </h2>
            <p className="text-[hsl(231,11%,63%)]">
              Please provide your name, email address, and phone number.
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <Input
              type={"text"}
              inputName={"Name"}
              inputPlaceHolder={"e.g. Stephen King"}
            />
            <Input
              type={"text"}
              inputName={"Email Address"}
              inputPlaceHolder={"e.g. stephenking@lorem.com"}
            />

            <Input
              type={"number"}
              inputName={"Phone Number"}
              inputPlaceHolder={"e.g. +1 234 567 890"}
            />
          </div>
        </div>

        <button className="bg-[hsl(213,96%,18%)] my-4 w-fit text-white rounded-lg px-6 py-3 self-end">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Hero;
