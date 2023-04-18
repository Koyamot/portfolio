import React from "react";

const s3Bucket = "https://portfoliobucket85.s3.us-west-2.amazonaws.com/";

const Card = ({ useCase, i }) => {

  return (
    <div
      key={i}
      className="card w-48 bg-base-100 shadow-xl mx-4 rounded-md hover:scale-125"
    >
      <figure>
        <img src={`${s3Bucket}${useCase.thumbnail}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="bold">{useCase.title}</p>
      </div>
    </div>
  );
};

export default Card;
