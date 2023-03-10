import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import TaskCard from "./taskCard";
import { useSelector, useDispatch } from "react-redux";
import { onCreateTask, onDeleteTable } from "../store/reducers/showModal";
import { selectTable } from "../store/reducers/deleteTables";
import { fetchData } from "../store/reducers/getTables";
import { selectTaskTable } from "../store/reducers/taskReducer";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function GridList(props) {
  const [isDescending, setIsDescending] = useState(false);
  const [tasks, setTasks] = useState(props.tasks);
  const tableId = props.tableId;

  const dispatch = useDispatch();

  const handleSaveId = async () => {
    await dispatch(selectTable(props.tableId));
    await dispatch(onDeleteTable());
  };

  const handleCreateTask = async () => {
    await dispatch(selectTaskTable(tableId));
    await dispatch(onCreateTask());
  };

  return (
    <div className="bg-white flex flex-col rounded-md border-2 mb-8 p-2 relative border-b-4">
      <div className="flex flex-row px-2">
        <p className="text-xl mr-12 md:text-2xl ">{props.title}</p>
        <div className="flex items-center justify-center w-8 h-8 hover:bg-pink-300 hover:rounded-full absolute right-2 hover:transition-all hover:ease-in hover:duration-250">
          <AiOutlinePlus onClick={handleCreateTask} />
        </div>
        <div className="flex items-center justify-center w-8 h-8 hover:bg-blue-300 hover:rounded-full absolute top-2 right-11 hover:transition-all hover:ease-in hover:duration-250">
          {isDescending ? (
            <TiArrowSortedUp
              onClick={() => {
                setIsDescending(false);
                setTasks(
                  props.tasks
                    .slice()
                    .sort(
                      (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                    )
                );
              }}
            />
          ) : (
            <TiArrowSortedDown
              onClick={() => {
                setIsDescending(true);
                setTasks(
                  props.tasks
                    .slice()
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                );
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-center w-8 h-8 hover:bg-red-400 hover:rounded-full absolute top-2 right-20 hover:transition-all hover:ease-in hover:duration-250">
          <BsTrash onClick={handleSaveId} />
        </div>
      </div>
      {tasks ? (
        tasks.map((task) => (
          <TaskCard
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
  );
}
