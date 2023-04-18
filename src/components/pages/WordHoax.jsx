import React, { useEffect } from "react";
import useCaseList from "../common/useCaseList";
import { Feature } from "../common/Feature";
import { UseCase } from "./useCase";
import { Criteria } from "../common/Criteria";
import DesignWork from "../common/DesignWork";

const s3Bucket = "https://portfoliobucket85.s3.us-west-2.amazonaws.com/";

function WordHoax() {
  const wordHoax = useCaseList.wordHoax;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer,width=200,location=0,left=100,top=100");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container lg:px-40 sm:px-0">
      <div className="flex flex-col justify-center flex-wrap text-center mb-10">
        <h1 className="text-5xl font-bold">{wordHoax.title}</h1>
        <h2 className="text-3xl font-bold mb-6">{wordHoax.subtitle}</h2>
        <img
          src={`${s3Bucket}${wordHoax.headerImage}`}
          className="rounded-lg w-3/4 mx-auto drop-shadow-md mb-8"
          alt="check it out"
        />
      </div>
      <div id="Technical-Summary">
        <Feature wordHoax={wordHoax} />
        <UseCase wordHoax={wordHoax} />
        <Criteria wordHoax={wordHoax} />
        <DesignWork wordHoax={wordHoax} s3={s3Bucket} open={openInNewTab}/>
      </div>
    </div>
  );
}

export default WordHoax;
