import React from "react";
import SideBar from "./components/sidebar/SideBar.jsx";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="md:h-[96vh] flex h-auto items-center ">
      <Hero />
    </div>
  );
};

export default App;
