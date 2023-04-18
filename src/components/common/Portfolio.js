import React, { forwardRef, useState } from "react";
import Tabs from "./Tabs";
import useCaseList from "../common/useCaseList";

import { Link } from "react-router-dom";

const Portfolio = forwardRef((props, ref) => {
  const [isActive, setsActive] = useState(false);
  const useCases = useCaseList.useCases

  const onTabClick = () => {
    setIsActive(active);
  };

  return (
    <div ref={ref} className="landing text-center pt-10">
      <div className="min-h-screen bg-base-100">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold px-3 mb-6">
            Welcome to my Gallery of Visual Human Experiences
          </h1>
          <Tabs useCases={useCases} />
        </div>
      </div>
    </div>
  );
});

export default Portfolio;
