import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { onDeleteTask } from "../store/reducers/showModal";
import relativeTime from "dayjs/plugin/relativeTime";
import { selectTask } from "../store/reducers/deleteTask";
import { useDrag } from "react-dnd";
const dayjs = require("dayjs");
dayjs.extend(relativeTime);

export default function TaskCard(props) {
  const dispatch = useDispatch();
  const taskId = props.id;

  const handleDeleteTask = () => {
    dispatch(selectTask(taskId));
    dispatch(onDeleteTask());
  };

  return (
    <div className="bg-gray-200 m-4 p-2 rounded-md border-b-2 border-pink-300 px-4 relative">
      <div className="block">
        <div className="px-1 mb-1 mr-2 text-md md:text-lg font-bold">
          {props.title}
        </div>
        <div className="px-1 text-md md:text-md">{props.descr}</div>
        <div className="flex relative text-sm mt-10">
          <div className="absolute left-2 bottom-0">{props.auth}</div>
          <div className="absolute right-2 bottom-0">
            {dayjs(props.posted).fromNow()}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-8 h-8 hover:bg-red-400 hover:rounded-full absolute top-2 right-2 hover:transition-all hover:ease-in hover:duration-250">
        <BsTrash onClick={handleDeleteTask} />
      </div>
    </div>
  );
}
