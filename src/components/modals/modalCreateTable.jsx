import React, { useState, useEffect } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";

import { offCreateTable } from "../../store/reducers/showModal";
import { saveTitle, deleteTitle } from "../../store/reducers/tableReducer";
import { up } from "../../store/reducers/pageUpdate";
import { REACT_APP_API_URL } from "../../utils";

export default function ModalCreateTable() {
  const dispatch = useDispatch();
  const fTitle = useSelector((state) => state.tableCreator.title);
  const [blockedSubmit, setBlockedSubmit] = useState(false);

  const blocked = () => {
    !fTitle ? setBlockedSubmit(false) : setBlockedSubmit(true);
  };

  useEffect(() => {
    blocked();
  }, [fTitle]);

  const handleCreateTable = async () => {
    await axios
      .post(`${REACT_APP_API_URL}/create/table`, { title: fTitle })
      .catch((err) => console.log(err));
    dispatch(deleteTitle());
    dispatch(up());
    dispatch(offCreateTable());
  };

  return (
    <div className="h-screen flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 bg-black/75 z-10">
      <div className="bg-white flex flex-col py-4 px-8 h-3/6 w-5/6 md:h-2/3 md:w-2/6 rounded-md">
        <div className="flex flex-row items-center justify-center relative my-2">
          <p className="text-lg md:text-2xl font-bold">Create Table</p>
          <div className="absolute right-0 md:right-4 hover:bg-pink-400 w-6 h-6 flex justify-center items-center rounded-full">
            <RxCross2 onClick={() => dispatch(offCreateTable())} />
          </div>
        </div>
        <div className="h-1/3 px-4 my-4 flex flex-col items-center justify-center">
          <p className="text-lg my-4">Create name for table</p>
          <input
            type="text"
            className="w-full bg-[#f2f2f2] rounded-md p-2 border-b-4 focus:outline-none"
            onChange={(e) => {
              dispatch(saveTitle(e.target.value));
            }}
          />
        </div>
        <div className="mt-4 flex justify-center items-end h-1/3">
          {blockedSubmit ? (
            <button
              className="bg-green-500 h-12 w-3/5 rounded-xl border-b-4 text-white active:bg-green-700"
              onClick={handleCreateTable}
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
