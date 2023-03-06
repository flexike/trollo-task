import React from "react";
import Header from "./header";

export default function Body() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"></main>
    </div>
  );
}
