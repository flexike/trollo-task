import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function GridList(props) {
  return (
    <div className="bg-white flex flex-col rounded-md border-2 mb-8 p-2 relative border-b-4">
      <div className="flex flex-row px-2">
        <p className="text-xl md:text-2xl">{props.title}</p>
        <div className="flex items-center justify-center w-8 h-8 hover:bg-pink-300 hover:rounded-full absolute right-2 hover:transition-all hover:ease-in hover:duration-250">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="bg-gray-200 m-2 p-2 rounded-md border-b-2 border-pink-300">
        123
      </div>
    </div>
  );
}
