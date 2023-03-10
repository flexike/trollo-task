import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import TaskCard from "./taskCard";
import { useDispatch } from "react-redux";
import { onCreateTask, onDeleteTable } from "../store/reducers/showModal";
import { selectTable } from "../store/reducers/deleteTables";
import { selectTaskTable } from "../store/reducers/taskReducer";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { up } from "../store/reducers/pageUpdate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function GridList(props) {
  const dispatch = useDispatch();
  const tasksFrProps = props.tasks;
  const [isDescending, setIsDescending] = useState(false);
  const [state, setState] = useState({ quotes: tasksFrProps });
  const tableId = props.tableId;

  const handleSaveId = async () => {
    await dispatch(selectTable(props.tableId));
    await dispatch(onDeleteTable());
  };

  const handleCreateTask = async () => {
    await dispatch(selectTaskTable(tableId));
    await dispatch(onCreateTask());
  };

  useEffect(() => {}, [tasksFrProps]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  const QuoteList = React.memo(function QuoteList({ tasksList }) {
    return tasksList.map((task, index) => (
      <TaskCard
        index={index}
        title={task.title}
        descr={task.description}
        auth={task.author}
        posted={task.date}
        id={task.id}
        key={task.id}
      />
    ));
  });

  console.log(state);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
                  setState({
                    quotes: tasksFrProps
                      .slice()
                      .sort(
                        (a, b) =>
                          new Date(a.date).getTime() -
                          new Date(b.date).getTime()
                      ),
                  });
                  dispatch(up());
                }}
              />
            ) : (
              <TiArrowSortedDown
                onClick={() => {
                  setIsDescending(true);
                  setState({
                    quotes: tasksFrProps
                      .slice()
                      .sort(
                        (a, b) =>
                          new Date(b.date).getTime() -
                          new Date(a.date).getTime()
                      ),
                  });
                  dispatch(up());
                }}
              />
            )}
          </div>
          <div className="flex items-center justify-center w-8 h-8 hover:bg-red-400 hover:rounded-full absolute top-2 right-20 hover:transition-all hover:ease-in hover:duration-250">
            <BsTrash onClick={handleSaveId} />
          </div>
        </div>
        {tasksFrProps ? (
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <QuoteList tasksList={state.quotes} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : (
          <div className="m-2 p-2 rounded-sm text-xl bg-slate-200"></div>
        )}
      </div>
    </DragDropContext>
  );
}
