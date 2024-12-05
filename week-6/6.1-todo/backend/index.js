import express from "express";
import cors from "cors";

import {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodoById,
  searchTodo,
} from "./routes/todo.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

//Log Requests
app.use((req, res, next) => {
  console.log(req.method + req.url);
  next();
});

// Get all todos
app.get("/todos", getAllTodo);

// Add a new todo
app.post("/todos", createTodo);

// Update a todo
app.put("/todos/:id", updateTodo);

// Delete a todo
app.delete("/todos/:id", deleteTodoById);

// Search todos
app.get("/todos/search", searchTodo); // search route

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
