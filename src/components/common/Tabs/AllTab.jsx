import React from "react";
import Card from "../UseCaseCard";
import UXDesignTab from "./UXDesignTab";
import EngineerTab from "./EngineerTab";
import ArtTab from "./ArtTab";
const AllTab = ({ useCases }) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer,width=200,location=0,left=100,top=100");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="AllTabs grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
      <UXDesignTab open={openInNewTab} useCases={useCases} />
      <EngineerTab open={openInNewTab} useCases={useCases} />
      <ArtTab open={openInNewTab} useCases={useCases} />
    </div>
  );
};
export default AllTab;
