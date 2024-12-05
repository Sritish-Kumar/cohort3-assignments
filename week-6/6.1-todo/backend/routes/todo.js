import { json } from "express";

export let todos = []; // in memory space

let id = 1;

export async function getAllTodo(req, res, next) {
  return res.status(200).json(todos);
}

export async function createTodo(req, res, next) {
  try {
    const todo = req.body.todo;

    if (!todo) {
      return res.status(404).json({ message: "Todo Not added" });
    }
    const pushedtodo = { id: id++, todo: todo };
    todos.push(pushedtodo);

    res.status(201).json({ message: "Created", todo: pushedtodo });
  } catch (error) {
    return json.status(500).json({
      message: "Error Posting Data",
    });
  }
}

export async function updateTodo(req, res, next) {
  try {
    // Extract id from route parameters
    const update_id = parseInt(req.params.id, 10); // Use req.params instead of req.query
    const body = req.body.todo;

    // Validate inputs
    if (isNaN(update_id) || !body) {
      return res
        .status(400)
        .json({ message: "Please provide a valid ID and TODO to update" });
    }

    // Find the todo item
    const todo = todos.find((t) => t.id === update_id);
    if (!todo) {
      return res.status(404).json({ message: "ID not found" });
    }

    // Update the todo item
    todo.todo = body;

    return res.status(200).json({
      message: "Updated data",
      updatedTodo: todo,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Error updating data",
    });
  }
}

export async function deleteTodoById(req, res, next) {
  try {
    const delete_id = parseInt(req.params.id, 10);

    if (isNaN(delete_id)) {
      return res.status(404).json({
        message: "Give id to delete",
      });
    }

    const index = todos.findIndex((t) => t.id === delete_id);
    todos.splice(index, 1);

    return res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Deleting Data",
    });
  }
}

export async function searchTodo(req, res, next) {}
