const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const mysql = require("mysql");
const database = require("./db/knex.js");
const cors = require("cors");
app.use(cors());

app.get("/api/text", (req, res) => {
  res.json({ text: "Hello World!!" });
});

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

app.get("/api/tasks", (req, res) => {
  database("task_table")
    .select()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("Error retrieving chat messages:", error);
      res.status(500).json({ error: "Failed to retrieve chat messages" });
    });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
