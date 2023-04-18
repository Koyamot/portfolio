import React from "react";
import Card from "../UseCaseCard";
import { Link } from "react-router-dom";

const UXDesignTab = ({ useCases }) => {
  return (
    <div className="UXDesignTab flex justify-center">
      {useCases.design.map((useCase, i) => (
        <Link to={`${useCase.to}`}>
          <Card useCase={useCase} />
        </Link>
      ))}
    </div>
  );
};
export default UXDesignTab;
