import React from "react";
import SideBarBgImg from "../../assets/bg-sidebar-desktop.svg";
import "../../App.css";
import Step from "./Step";

const SideBar = () => {
  return (
    <div className="sidebar justify-center md:justify-start items-start absolute md:static top-0 w-full min-h-45 md:w-auto left-0 md:rounded-xl  flex-row md:items-center md:items-start min-w-[260px] flex md:flex-col gap-6  md:min-h-140  px-6 py-10">
      <Step stepNo={"1"} stepName={"YOUR INFO"} />
      <Step stepNo={"2"} stepName={"SELECT PLAN"} />
      <Step stepNo={"3"} stepName={"ADD-ONS"} />
      <Step stepNo={"4"} stepName={"SUMMARY"} />
    </div>
  );
};

export default SideBar;
