import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
// import { AiOutlineEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { onDeleteTask } from "../store/reducers/showModal";

export default function TaskCard(props) {
  const [author, setAuthor] = useState("flexike");
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-200 m-4 p-2 rounded-md border-b-2 border-pink-300 px-4 relative">
      <div className="block">
        <div className="px-1 mb-1 mr-2 text-md md:text-lg font-bold">
          {props.title}
        </div>
        <div className="px-1 text-md md:text-md">{props.descr}</div>
        <div className="flex relative text-sm mt-10">
          <div className="absolute left-2 bottom-0">Author: {author}</div>
          <div className="absolute right-2 bottom-0">Posted: 5 minutes ago</div>
        </div>
      </div>
      <div className="flex items-center justify-center w-8 h-8 hover:bg-red-400 hover:rounded-full absolute top-4 right-4 hover:transition-all hover:ease-in hover:duration-250">
        <BsTrash onClick={() => dispatch(onDeleteTask())} />
      </div>
      {/* <div className="absolute top-10 right-4">
        <AiOutlineEdit />
      </div> */}
    </div>
  );
}
