import React, { useEffect, useState } from "react";
import Header from "./header";
import GridList from "./grid-list";
import TableCreator from "./tablecreator";
import ModalCreateTable from "./modals/modalCreateTable";
import ModalCreateTask from "./modals/modalCreateTask";
import ModalDeleteTable from "./modals/modalDeleteTable";
import ModalDeleteTask from "./modals/modalDeleteTask";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/reducers/getTables";

export default function Body() {
  const dispatch = useDispatch();
  const pageUpdaterValue = useSelector((state) => state.updater.update);
  const vCreateTask = useSelector(
    (state) => state.showModal.mCreateTaskVisability
  );
  const vCreateTable = useSelector(
    (state) => state.showModal.mCreateTableVisability
  );
  const vDeleteTable = useSelector(
    (state) => state.showModal.mDeleteTableVisability
  );
  const vDeleteTask = useSelector(
    (state) => state.showModal.mDeleteTaskVisability
  );

  const noData = useSelector((state) => state.getAll.all);

  useEffect(() => {
    dispatch(fetchData());
  }, [pageUpdaterValue]);

  if (!noData) return "loading";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-full p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="md:grid md:grid-cols-3 md:gap-10 md:px-10 md:pt-4">
          {noData.map((dataTable) => {
            return (
              <GridList
                key={dataTable.id}
                title={dataTable.title}
                tableId={dataTable.id}
                tasks={dataTable.tasks}
              />
            );
          })}

          <TableCreator />
        </div>

        {vCreateTask ? <ModalCreateTask /> : null}
        {vCreateTable ? <ModalCreateTable /> : null}
        {vDeleteTable ? <ModalDeleteTable /> : null}
        {vDeleteTask ? <ModalDeleteTask /> : null}
      </main>
    </div>
  );
}
