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
  try {
    res.status(200).json(
      await prisma.taskTable.findMany({
        include: {
          tasks: true,
        },
      })
    );
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/create/table", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) return res.status(400).json({ message: "Data not provided!" });

    const newTable = await prisma.taskTable.create({
      data: {
        title: title,
      },
    });

    if (newTable) {
      res.status(200).redirect("/");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/create/task", async (req, res) => {
  try {
    const { title, description, author, tableId } = req.body;

    if (!title || !description || !author || !tableId)
      return res.status(400).json({ message: "Data not provided!" });

    const newTask = await prisma.tasks.create({
      data: {
        title: title,
        description: description,
        author: author,
        taskTableId: parseInt(tableId),
      },
    });

    if (newTask) {
      res.status(200).json(newTask);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.delete("/delete/table", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: "Data not provided!" });

    const deletedTable = await prisma.taskTable.delete({
      where: {
        id: id,
      },
      include: {
        tasks: true,
      },
    });

    if (deletedTable) {
      res.status(200).json(deletedTable);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.delete("/delete/task", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: "Data not provided!" });

    const deletedTask = await prisma.tasks.delete({
      where: {
        id: id,
      },
    });

    if (deletedTask) {
      res.status(200).json(deletedTask);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.listen(3001, () => {
  console.log(`Server started!`);
});
