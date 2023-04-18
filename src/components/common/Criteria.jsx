import React from "react";

const s3Bucket = "https://portfoliobucket85.s3.us-west-2.amazonaws.com/";

export const Criteria = ({ wordHoax }) => {
  const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer,width=200,location=0,left=100,top=100");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-xl md:mb-12">
        <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight mb-6 text-gray-900 sm:text-4xl md:mx-auto">
          {wordHoax.useCase.criteria.title}
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 items-center sm:mx-auto">
        <div className="flex flex-col">
        <h4 className="lg:text-1xl text-left mb-6 font-bold text-gray-700 md:text-lg">
          {wordHoax.useCase.criteria.description}
        </h4>
        <div className="border-t">
          {wordHoax.useCase.criteria.list.map((item, i) => (
            <div key={i} className="border-b">
              <p className="py-4 font-normal italic lg:text-left sm:text-center leading-5">{item}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 items-between gap-5">
            <img
              onClick={() => {
                openInNewTab(
                  `${s3Bucket}${wordHoax.useCase.criteria.images[0]}`
                );
              }}
              src={`${s3Bucket}${wordHoax.useCase.criteria.images[0]}`}
              className="object-cover w-full col-span-2 rounded shadow-lg cursor-pointer hover:scale-125"
            />
            <img
              onClick={() => {
                openInNewTab(
                  `${s3Bucket}${wordHoax.useCase.criteria.images[1]}`
                );
              }}
              src={`${s3Bucket}${wordHoax.useCase.criteria.images[1]}`}
              className="object-cover w-full col-span-2 rounded shadow-lg hover:scale-125"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              onClick={() => {
                openInNewTab(
                  `${s3Bucket}${wordHoax.useCase.criteria.images[2]}`
                );
              }}
              src={`${s3Bucket}${wordHoax.useCase.criteria.images[2]}`}
              className="object-contain w-full items-between col-span-2 rounded shadow-lg hover:scale-125"
            />
            <img
              onClick={() => {
                openInNewTab(
                  `${s3Bucket}${wordHoax.useCase.criteria.images[3]}`
                );
              }}
              src={`${s3Bucket}${wordHoax.useCase.criteria.images[3]}`}
              className="object-cover w-full col-span-2 rounded shadow-lg hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
