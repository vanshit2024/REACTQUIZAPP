import React from "react";
import reactLogo from "/react.png";

const Welcome = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
      <img src={reactLogo} className="w-[200px] sm:w-[300px]" alt="" />
      <h1 className="text-2xl font-bold text-gray-800 sm:text-4xl">
        React Knowledge Quiz
      </h1>
      <span className="text-lg font-semibold sm:text-3xl">
        Test your React expertise!
      </span>
      <button
        onClick={onStart}
        className="w-1/2 rounded-full bg-black px-4 py-2 text-sm text-white hover:opacity-80 sm:w-1/3 sm:text-xl"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Welcome;
