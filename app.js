import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Task from "./models/taskModel.js";

dotenv.config();

const app = express();
const db = mongoose.connect("mongodb://localhost/avanade");

const tasksRouter = express.Router();

const port = process.env.PORT || 3000;

tasksRouter.route("/tasks").get((req, res) => {

  Task.find((err, tasks) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(tasks);
    }
  });
});

app.use("/api", tasksRouter);

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Bem vindo à REST API</h1>");
});

app.listen(port, () => {
  console.log(`Running Web Server at port: ${port}`);
});