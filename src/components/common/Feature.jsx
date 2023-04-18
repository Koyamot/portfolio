import React from "react";

export const Feature = ({ wordHoax }) => {

  return (
    <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/4">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            {wordHoax.technicalSummary.title}
          </h2>
        </div>
        <div className="lg:w-full">
          <p className="text-base text-gray-700 md:text-lg">
            {wordHoax.technicalSummary.paragraphs}
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between content-left sm:grid-cols-2 lg:grid-cols-4">
      {/* <div className="grid gap-8 row-gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-4"> */}
        {wordHoax.technicalSummary.summary.map((desc, key) => (
          <div key={key}>

            <h6 className="mb-2 font-semibold leading-5">{desc.title}</h6>
            <ul className="mb-4 -ml-1 space-y-2">
              {desc.array.map((item, key) => (
                <li key={key} className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
