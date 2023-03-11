import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { onDeleteTask } from "../store/reducers/showModal";
import { selectTask } from "../store/reducers/deleteTask";

dayjs.extend(relativeTime);

export default function TaskCard({
  id,
  title,
  auth,
  index,
  posted,
  descr,
  key,
}) {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(selectTask(id));
    dispatch(onDeleteTask());
  };

  return (
    <div className="bg-gray-200 m-4 p-2 rounded-md border-b-2 border-pink-300 px-4 relative">
      <div className="block">
        <div className="px-1 mb-1 mr-2 text-md md:text-lg font-bold">
          {title}
        </div>
        <div className="px-1 text-md md:text-md">{descr}</div>
        <div className="flex relative text-sm mt-10">
          <div className="absolute left-2 bottom-0">{auth}</div>
          <div className="absolute right-2 bottom-0">
            {dayjs(posted).fromNow()}
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-8 h-8 hover:bg-red-400
              hover:rounded-full absolute top-2 right-2 hover:transition-all hover:ease-in
              hover:duration-250"
      >
        <BsTrash onClick={handleDeleteTask} />
      </div>
    </div>
  );
}
