import React from "react";
import Header from "./header";
import GridList from "./grid-list";
import ModalCreateTable from "./modals/modalCreateTable";
import ModalCreateTask from "./modals/modalCreateTask";
import ModalDeleteTable from "./modals/modalDeleteTable";
import ModalDeleteTask from "./modals/modalDeleteTask";

export default function Body() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-full p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="md:grid md:grid-cols-3 md:gap-10 md:px-10 md:pt-4">
          <GridList title="To do 📝" />
          <GridList title="Doing 🛠" />
          <GridList title="Done ✔" />
        </div>
        {/* <ModalCreateTable /> */}
        {/* <ModalCreateTask /> */}
        {/* <ModalDeleteTable /> */}
        {/* <ModalDeleteTask /> */}
      </main>
    </div>
  );
}
