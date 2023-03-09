import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onCreateTable } from "../store/reducers/showModal";

export default function TableCreator() {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-white text-4xl  rounded-3xl border-b-4 flex items-center justify-center w-[100px] h-[100px]
      active:bg-black active:text-white"
    >
      <button
        onClick={() => {
          dispatch(onCreateTable());
        }}
      >
        [+]
      </button>
    </div>
  );
}
