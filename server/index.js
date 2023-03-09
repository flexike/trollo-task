const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const displayAll = await prisma.taskTable.findMany({
    include: {
      tasks: true,
    },
  });
  res.status(200).json(displayAll);
  console.log(displayAll);
});

app.post("/create/table", async (req, res) => {
  const { title } = req.body;
  const newTable = await prisma.taskTable.create({
    data: {
      title: title,
    },
  });
  res.status(200).redirect("/");
  console.log(newTable);
});

app.post("/create/task", async (req, res) => {
  const { title, description, author, tableId } = req.body;
  const newTask = await prisma.tasks.create({
    data: {
      title: title,
      description: description,
      author: author,
      taskTableId: parseInt(tableId),
    },
  });
  console.log(req.body.taskTableId);
  res.status(200).json(newTask);
});

app.delete("/delete/table", async (req, res) => {
  const { id } = req.body;
  const deletedTable = await prisma.taskTable.delete({
    where: {
      id: id,
    },
    include: {
      tasks: true,
    },
  });
  res.status(200).json(deletedTable);
});

app.delete("/delete/task", async (req, res) => {
  const { id } = req.body;
  const deletedTask = await prisma.tasks.delete({
    where: {
      id: id,
    },
  });
  res.status(200).json(deletedTask);
});

app.listen(3001, () => {
  console.log(`Server started!`);
});
