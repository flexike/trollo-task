import React from "react";
import { CiViewBoard } from "react-icons/ci";

export default function header() {
  return (
    <div className="w-full h-20 flex justify-center items-center shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
      <div className=" flex flex-col items-center text-2xl text-white ">
        <div className="flex items-center gap-4">
          <CiViewBoard />
          <p>My Board</p>
        </div>
        <p className="text-sm flex items-end text-purple-200">@flexike</p>
      </div>
    </div>
  );
}
