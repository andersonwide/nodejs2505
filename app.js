import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Task from "./models/taskModel.js";
import bodyParser from "body-parser"

dotenv.config();

const app = express();
const db = mongoose.connect("mongodb://localhost/avanade");


const tasksRouter = express.Router();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

tasksRouter.route("/tasks")
.post((req, res) => {
  const task = new Task(req.body);
  task.save();
  return res.status(201).json(task)
})

.get((req, res) => {

  const query = {};

  if(req.query.title){
    query.title = req.query.title;
  }

  Task.find(query, (err, tasks) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(tasks);
    }
  });
});

tasksRouter.route("/tasks/:tasksid").get((req, res) => {

  Task.findById(req.params.tasksid, (err, tasks) => {
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