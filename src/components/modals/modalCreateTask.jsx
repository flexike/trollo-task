import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { offCreateTask } from "../../store/reducers/showModal";
import {
  saveTitle,
  saveDescription,
  saveAuthor,
} from "../../store/reducers/taskReducer";

export default function ModalCreateTask() {
  const dispatch = useDispatch();
  const [blockSubmit, setBlockSubmit] = useState(false);
  const fTitle = useSelector((state) => state.taskCreator.title);
  const fDesc = useSelector((state) => state.taskCreator.description);
  const fAuth = useSelector((state) => state.taskCreator.author);

  const handleTitle = (e) => {
    dispatch(saveTitle(e.target.value));
  };
  const handleDescr = (e) => {
    dispatch(saveDescription(e.target.value));
  };
  const handleAuth = (e) => {
    dispatch(saveAuthor(e.target.value));
  };

  const blocked = () => {
    if (fTitle === "" || fDesc === "" || fAuth === "") {
      setBlockSubmit(false);
    } else {
      setBlockSubmit(true);
    }
  };

  useEffect(() => {
    blocked();
  }, [fTitle, fDesc, fAuth]);

  return (
    <div className="h-screen flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 bg-black/75 z-10">
      <div className="bg-white flex flex-col py-4 px-8 h-2/3 w-5/6 md:h-2/3 md:w-2/6 rounded-md">
        <div className="flex flex-row items-center justify-center relative my-2">
          <p className="text-lg md:text-2xl font-bold">Create Task</p>
          <div className="absolute right-0 md:right-4 hover:bg-pink-400 w-6 h-6 flex justify-center items-center rounded-full">
            <RxCross2 onClick={() => dispatch(offCreateTask())} />
          </div>
        </div>
        <div className="px-4 flex flex-col">
          <p className="text-lg my-2">Task title</p>
          <input
            type="text"
            className="w-full bg-[#f2f2f2] rounded-md p-2 border-b-4 focus:outline-none"
            onChange={handleTitle}
          />
        </div>
        <div className="px-4 flex flex-col h-3/4">
          <p className="text-lg my-2">Task description</p>
          <textarea
            type="text"
            className="w-full bg-[#f2f2f2] rounded-md p-2 h-full resize-none border-b-4 focus:outline-none"
            onChange={handleDescr}
          />
        </div>
        <div className="px-4 flex flex-col md:mb-4">
          <p className="text-lg my-2">Task author</p>
          <input
            type="text"
            className="w-full bg-[#f2f2f2] rounded-md p-2 border-b-4 focus:outline-none"
            onChange={handleAuth}
          />
        </div>
        <div className="mt-4 flex justify-center items-end md:h-1/4 md:mt-0 md:mb-4">
          {blockSubmit ? (
            <button
              className="bg-green-500 h-12 w-3/5 rounded-xl border-b-4 text-white active:bg-green-700"
              type="submit"
            >
              Publish
            </button>
          ) : (
            <button
              className="bg-red-500 h-12 w-3/5 rounded-xl border-b-4 text-white active:bg-red-700"
              disabled
            >
              Blocked
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
