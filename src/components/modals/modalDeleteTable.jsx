import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";

import { deleteTable } from "../../store/reducers/deleteTables";
import { offDeleteTable } from "../../store/reducers/showModal";
import { up } from "../../store/reducers/pageUpdate";

export default function ModalDeleteTable() {
  const dispatch = useDispatch();
  const selectedTableId = useSelector((state) => state.deleteTable.id);

  const handleDeleteTable = async () => {
    await dispatch(deleteTable(selectedTableId));
    await dispatch(offDeleteTable());
    await dispatch(up());
  };

  return (
    <div className="h-screen flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 bg-black/75 z-10">
      <div className="bg-white flex flex-col py-4 px-8 h-3/6 w-5/6 md:h-2/3 md:w-2/6 rounded-md">
        <div className="flex flex-row items-center justify-center relative my-2">
          <p className="text-lg md:text-2xl font-bold">Delete task table?</p>
          <div className="absolute right-0 md:right-4 hover:bg-pink-400 w-6 h-6 flex justify-center items-center rounded-full">
            <RxCross2 onClick={() => dispatch(offDeleteTable())} />
          </div>
        </div>
        <div className="h-1/3 px-4 my-4 flex flex-col items-center justify-center">
          <p className="my-4 text-4xl block-inline">Are you sure?</p>
        </div>
        <div className="mt-4 flex justify-center items-end h-1/3 gap-5">
          <button
            className="bg-green-500 h-12 w-2/5 rounded-xl border-b-4 text-white active:bg-green-700"
            onClick={() => dispatch(offDeleteTable())}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 h-12 w-2/5 rounded-xl border-b-4 text-white active:bg-red-700"
            onClick={handleDeleteTable}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
