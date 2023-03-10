import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import TaskCard from "./taskCard";

import { onCreateTask, onDeleteTable } from "../store/reducers/showModal";
import { selectTable } from "../store/reducers/deleteTables";
import { selectTaskTable } from "../store/reducers/taskReducer";
import { up } from "../store/reducers/pageUpdate";

export default function GridList({ tasks, tableId, title }) {
  const dispatch = useDispatch();
  const [isDescending, setIsDescending] = useState(false);

  const handleSaveId = async () => {
    await dispatch(selectTable(tableId));
    await dispatch(onDeleteTable());
  };

  const handleCreateTask = async () => {
    await dispatch(selectTaskTable(tableId));
    await dispatch(onCreateTask());
  };

  useEffect(() => {}, [tasks]);

  return (
    <>
      <div className="bg-white flex flex-col rounded-md border-2 mb-8 p-2 relative border-b-4">
        <div className="flex flex-row px-2">
          <p className="text-xl mr-12 md:text-2xl ">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 hover:bg-pink-300 hover:rounded-full absolute right-2 hover:transition-all hover:ease-in hover:duration-250">
            <AiOutlinePlus onClick={handleCreateTask} />
          </div>
          <div className="flex items-center justify-center w-8 h-8 hover:bg-blue-300 hover:rounded-full absolute top-2 right-11 hover:transition-all hover:ease-in hover:duration-250">
            {isDescending ? (
              <TiArrowSortedUp
                onClick={() => {
                  setIsDescending(false);
                  dispatch(up());
                }}
              />
            ) : (
              <TiArrowSortedDown
                onClick={() => {
                  setIsDescending(true);
                  dispatch(up());
                }}
              />
            )}
          </div>
          <div className="flex items-center justify-center w-8 h-8 hover:bg-red-400 hover:rounded-full absolute top-2 right-20 hover:transition-all hover:ease-in hover:duration-250">
            <BsTrash onClick={handleSaveId} />
          </div>
        </div>
        {tasks ? (
          tasks.map((task, index) => (
            <TaskCard
              index={index}
              title={task.title}
              descr={task.description}
              auth={task.author}
              posted={task.date}
              id={task.id}
              key={task.id}
            />
          ))
        ) : (
          <div className="m-2 p-2 rounded-sm text-xl bg-slate-200"></div>
        )}
      </div>
    </>
  );
}
