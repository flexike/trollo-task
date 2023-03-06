import React from "react";
import Header from "./header";

export default function Body() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-full p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="md:grid md:grid-cols-3 md:gap-10 md:px-10 md:pt-4">
          <div className="bg-white">Todo</div>
          <div className="bg-white">Doing</div>
          <div className="bg-white">Done</div>
        </div>
      </main>
    </div>
  );
}
