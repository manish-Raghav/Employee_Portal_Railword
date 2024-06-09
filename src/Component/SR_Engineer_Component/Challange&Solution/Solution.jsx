import React from "react";
import ChatList from "./ChatList";
import { BiSolidMessageDots } from "react-icons/bi";

const Solution = () => {
  return (
    <div className="bg-white shadow-md  w-[70vh]    border border-gray-200 border-t-0 border-r-[0.8px]">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <BiSolidMessageDots
            style={{ width: "32px", height: "32px", color: "#00A3FF" }}
          />
          <h1 className="text-2xl font-semibold text-custom-blue">solution</h1>
        </div>
      </div>
      <div className="flex items-center px-4">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />

          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.386a1 1 0 01-1.414 1.414l-5.387-5.386zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <button className="text-white bg-[#00A3FF] p-2 rounded-lg ml-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ChatList />
    </div>
  );
};

export default Solution
