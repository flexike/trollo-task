import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import TaskCard from "./taskCard";
import { useSelector, useDispatch } from "react-redux";
import { onCreateTask, onDeleteTable } from "../store/reducers/showModal";
import { selectTable } from "../store/reducers/deleteTables";

export default function GridList(props) {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(true);

  const handleSaveId = async () => {
    await dispatch(selectTable(props.tableId));
    await dispatch(onDeleteTable());
    await console.log(props.tableId);
  };

  return (
    <div className="bg-white flex flex-col rounded-md border-2 mb-8 p-2 relative border-b-4">
      <div className="flex flex-row px-2">
        <p className="text-xl mr-12 md:text-2xl ">{props.title}</p>
        <div className="flex items-center justify-center w-8 h-8 hover:bg-pink-300 hover:rounded-full absolute right-2 hover:transition-all hover:ease-in hover:duration-250">
          <AiOutlinePlus onClick={() => dispatch(onCreateTask())} />
        </div>
        <div className="flex items-center justify-center w-8 h-8 hover:bg-red-400 hover:rounded-full absolute top-2 right-10 hover:transition-all hover:ease-in hover:duration-250">
          <BsTrash onClick={handleSaveId} />
        </div>
      </div>
      {empty ? (
        <TaskCard
          title="Task#2 Killing monsters like Gerald from Rivia in his early twenties"
          descr="Do trello table, kill bad monsters with nobrains. Let good monsters with brains live."
        />
      ) : (
        <div className="m-2 p-2 rounded-sm text-xl bg-slate-200"></div>
      )}
    </div>
  );
}
