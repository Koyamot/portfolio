import React, { useState } from "react";
import AllTab from "./Tabs/AllTab";
import UXDesignTab from "./Tabs/UXDesignTab";
import EngineerTab from "./Tabs/EngineerTab";
import ArtTab from "./Tabs/ArtTab";

const Tabs = ({ useCases }) => {
  const [activeTab, setActiveTab] = useState("designTab");


  //  Functions to handle Tab Switching
  const allTab = () => {
    // update the state to tab1
    setActiveTab("allTab");
  };
  const designTab = () => {
    // update the state to tab2
    setActiveTab("designTab");
  };
  const engineerTab = () => {
    // update the state to tab2
    setActiveTab("engineerTab");
  };
  const artTab = () => {
    // update the state to tab2
    setActiveTab("artTab");
  };

  return (
    <>
      <div className="tabs container mb-10 justify-center">
        {/* <a
          onClick={allTab}
          className={`tab tab-lg tab-bordered border-secondary-focus rounded-lg focus:border-secondary ${
            activeTab === "allTab" ? "tab-active bg-primary border-none" : ""
          }`}
        >
          All
        </a> */}
        <a
          onClick={designTab}
          className={`tab tab-lg tab-bordered border-secondary-focus rounded-lg focus:border-secondary ${
            activeTab === "designTab" ? "tab-active bg-primary border-none" : ""
          }`}
        >
          UX & Design
        </a>
        <a
          onClick={engineerTab}
          className={`tab tab-lg tab-bordered border-secondary-focus rounded-lg focus:border-secondary ${
            activeTab === "engineerTab" ? "tab-active bg-primary border-none" : ""
          }`}
        >
          Engineer
        </a>
        {/* <a
          onClick={artTab}
          className={`tab tab-lg tab-bordered border-secondary-focus rounded-lg focus:border-secondary ${
            activeTab === "artTab" ? "tab-active bg-primary border-none" : ""
          }`}
        >
          Art
        </a> */}
      </div>
      <div className="container">

        {activeTab === "designTab" ? <UXDesignTab useCases={useCases}/> : null}


      </div>
    </>
  );
};

export default Tabs;
