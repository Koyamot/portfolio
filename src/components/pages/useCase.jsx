import React from "react";

const s3Bucket = "https://portfoliobucket85.s3.us-west-2.amazonaws.com/";

export const UseCase = ({ wordHoax }) => {


  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer,width=200,location=0,left=100,top=100");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {wordHoax.useCase.paragraphs.map((p, key) => (
        <div key={key} className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div>
            {p.images.map((img, i) => (
              <img
              onClick={() => {
                openInNewTab(
                  `${s3Bucket}${img}`
                );
              }}
                src={`${s3Bucket}${img}`}
                key={i}
                className="object-fit w-full h-56 rounded shadow-lg sm:h-96 hover:scale-125"
              />
            ))}
          </div>
          <div className="flex flex-nowrap justify-between">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  {p.title}
                </h2>
                <p
                  key={key}
                  className="text-base text-gray-700 md:text-lg mb-4"
                >
                  {p.paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
