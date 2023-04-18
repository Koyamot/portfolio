import React from "react";

export const Feature = ({ wordHoax }) => {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
      <div className="grid gap-8 row-gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        {wordHoax.technicalSummary.summary.map((desc, key) => (
          <div key={key}>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-7 h-7 text-deep-purple-accent-400"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="11"
                  cy="13"
                  fill="none"
                  r="9"
                  stroke="currentColor"
                />
                <path
                  d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>
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
