import React from "react";
import { CiViewBoard } from "react-icons/ci";

export default function header() {
  return (
    <div className="w-full bg-pink-400 h-20 flex justify-center items-center shadow-lg">
      <div className="text-2xl text-white flex items-center gap-4">
        <CiViewBoard />
        <p>My Board</p>
      </div>
    </div>
  );
}
