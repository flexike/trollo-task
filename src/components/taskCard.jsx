import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export default function TaskCard(props) {
  const [author, setAuthor] = useState("flexike");
  return (
    <div className="bg-gray-200 m-4 p-2 rounded-md border-b-2 border-pink-300 px-4 relative">
      <div className="block">
        <div className="px-1 mb-1 text-md md:text-lg font-bold">
          {props.title}
        </div>
        <div className="px-1 text-md md:text-md">{props.descr}</div>
        <div className="flex relative text-sm mt-10">
          <div className="absolute left-2 bottom-0">Author: {author}</div>
          <div className="absolute right-2 bottom-0">Posted: 5 minutes ago</div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <BsTrash />
      </div>
      <div className="absolute top-10 right-4">
        <AiOutlineEdit />
      </div>
    </div>
  );
}
