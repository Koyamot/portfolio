import React from "react";

const DesignWork = ({ wordHoax, s3, open }) => {
  const section = wordHoax.sections;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-xl md:mb-12">
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {section[0].title}
        </h1>
      </div>
      <div className="flex flex-row justify-center mb-10">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle1}
            </h3>
          </span>
          {section[0].paragraph1}
        </p>
      </div>
      <div className="flex flex-row justify-center ">
        {section[0].brainstorm.map((pics) => (
          <img
            onClick={() => open(`${s3}${pics}`)}
            className="w-2/5 hover:scale-110 mx-auto mb-10 drop-shadow-md rounded-md"
            src={`${s3}${pics}`}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center mb-10">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle2}
            </h3>
          </span>
          {section[0].paragraph2}
        </p>
      </div>
      <div className="flex flex-row justify-center">
        {section[0].userFlow.map((pics) => (
          <img
            onClick={() => open(`${s3}${pics}`)}
            className="mb-10 mx-auto hover:scale-110 drop-shadow-md rounded-md"
            src={`${s3}${pics}`}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center mb-10">
        <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
          {section[0].subtitle3}
        </h3>
        <p>{section[0].paragraph3}</p>
      </div>
      <div className="flex w-full flex-wrap justify-evenly">
        {section[0].wireframes.map((pics) => (
          <img
            onClick={() => open(`${s3}${pics}`)}
            className="mb-10 w-1/3 mx-4 hover:scale-110 drop-shadow-md rounded-md"
            src={`${s3}${pics}`}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle4}
            </h3>
          </span>
          {section[0].paragraph4}
        </p>
      </div>

      <div className="grid grid-col-2 grid-flow-col gap-4 justify-between items-center w-3/4 mx-auto">
        <img
          onClick={() => open(`${s3}${section[0].designSystem[0]}`)}
          className="mb-10 hover:scale-110 drop-shadow-md rounded-md col-span-2"
          src={`${s3}${section[0].designSystem[0]}`}
        />
        <img
          onClick={() => open(`${s3}${section[0].designSystem[1]}`)}
          className="mb-10 hover:scale-110 drop-shadow-md rounded-md row-span-2"
          src={`${s3}${section[0].designSystem[1]}`}
        />
        <img
          onClick={() => open(`${s3}${section[0].designSystem[2]}`)}
          className="mb-10 hover:scale-110 drop-shadow-md rounded-md col-span-2"
          src={`${s3}${section[0].designSystem[2]}`}
        />
        <img
          onClick={() => open(`${s3}${section[0].designSystem[3]}`)}
          className="mb-10 hover:scale-110 drop-shadow-md rounded-md row-span-4"
          src={`${s3}${section[0].designSystem[3]}`}
        />
      </div>
      <div className="flex flex-row justify-center mb-10">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle5}
            </h3>
          </span>
          {section[0].paragraph5}
        </p>
      </div>
      <div className="flex flex-col flex-wrap w-full">
        <div className="flex w-full flex-wrap justify-evenly">
          {section[0].iterations.map((pics) => (
            <img
              onClick={() => open(`${s3}${pics}`)}
              className="mb-10 w-2/5 mx-4 hover:scale-110 drop-shadow-md rounded-md"
              src={`${s3}${pics}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center mb-10">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle6}
            </h3>
          </span>
          {section[0].paragraph6}
        </p>
      </div>
      <div className="flex flex-col flex-wrap w-full">
        <div className="flex w-full flex-wrap justify-evenly">
          {section[0].finale.map((pics) => (
            <img
              onClick={() => open(`${s3}${pics}`)}
              className="mb-10 w-2/5 mx-4 hover:scale-110 drop-shadow-md rounded-md"
              src={`${s3}${pics}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center mb-10">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle7}
            </h3>
          </span>
          {section[0].paragraph7}
        </p>
      </div>
      <div className="flex flex-col flex-wrap w-full">
        <div className="flex w-full flex-wrap justify-center">
          {section[0].bonus.map((pics) => (
            <img
              onClick={() => open(`${s3}${pics}`)}
              className="mb-10 w-2/5 object-contain mx-4 hover:scale-110 drop-shadow-md rounded-md"
              src={`${s3}${pics}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center mb-10">
        <p>
          <span>
            <h3 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
              {section[0].subtitle8}
            </h3>
          </span>
          {section[0].paragraph8}
        </p>
      </div>
    </div>
  );
};

export default DesignWork;
