import React from "react";
import SideBarBgImg from "../assets/bg-sidebar-desktop.svg";
import "../App.css";
import Step from "./Step";

const SideBar = () => {
  return (
    <div className="sidebar border min-w-[250px] flex flex-col gap-6 min-h-140 px-6 py-10">
      <Step stepNo={"1"} stepName={"YOUR INFO"} />
      <Step stepNo={"2"} stepName={"SELECT PLAN"} />
      <Step stepNo={"3"} stepName={"ADD-ONS"} />
      <Step stepNo={"4"} stepName={"SUMMARY"}/>
    </div>
  );
};

export default SideBar;
