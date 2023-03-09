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
  res.status("200").json(displayAll);
  console.log(displayAll);
});

app.post("/create/table", async (req, res) => {
  const { title } = req.body;
  const newTable = await prisma.taskTable.create({
    data: {
      title: title,
    },
  });
  res.status("200").redirect("/");
  console.log(newTable);
});

app.post("/create/task", async (req, res) => {
  const { title, description, author, taskTableId } = req.body;
  const newTask = await prisma.tasks.create({
    data: {
      title: title,
      description: description,
      author: author,
      taskTableId: taskTableId,
    },
  });
  console.log(req.body.taskTableId);
  res.status("200").json(newTask);
});

app.delete("/delete/table", async (req, res) => {
  const { id } = req.body;
  const deleteTable = await prisma.taskTable.delete({
    where: {
      id: id,
    },
    include: {
      tasks: true,
    },
  });
  res.status("200").redirect("/");
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
