const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.get("/", async (req, res) => {
  const displayAll = await prisma.taskTable.findMany({
    include: {
      tasks: true,
    },
  });
  res.status("200").json(displayAll);
  console.log(displayAll);
});

app.get("/create/table", async (req, res) => {
  const newTable = await prisma.taskTable.create({
    data: {
      title: "new1",
    },
  });
  res.status("200").json(newTable);
  console.log(newTable);
});

app.get("/create/task", async (req, res) => {
  const newTask = await prisma.tasks.create({
    data: {
      title: "task#1",
      description: "Make cool trollo board",
      author: "flexike",
      taskTableId: 3,
    },
  });

  res.status("200").json(newTask);
});

app.get("/delete/table", async (req, res) => {
  const deleteTable = await prisma.taskTable.delete({
    where: {
      id: 3,
    },
    include: {
      tasks: true,
    },
  });
  res.status("200").json(deleteTable);
});

app.get("/delete/task", async (req, res) => {
  const deleteTask = await prisma.tasks.delete({
    where: {
      id: 5,
    },
  });
  res.status("200").json(deleteTask);
});

app.listen(3001, () => {
  console.log(`Server started!`);
});
