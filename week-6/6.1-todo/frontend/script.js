const API_URL = "http://localhost:3001/todos";

// Fetch existing todos when the page loads
document.addEventListener("DOMContentLoaded", async () => {
  // fetch todos
  const todos = await fetchTodos();
  document.getElementById("todo-list").innerHTML = "";
  addTodoToDOM(todos);
});

// Fetch todos from backend
async function fetchTodos() {
  //  write here
  const response = await axios.get(API_URL);
  return response.data;
}

// Add a new todo to the DOM
function addTodoToDOM(todos) {
  //  write here
  todos.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.innerHTML = element.todo;

    const btn = document.createElement("button");
    btn.classList.add("delete-btn");

    btn.addEventListener("click", (event) => {
      return deleteTodo(element.id);
    });
    btn.innerHTML = "Delete";

    const li = document.createElement("li");
    li.classList.add("todo-ele");
    li.setAttribute("data-id", element.id);
    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById("todo-list").appendChild(li);
  });
}

// Add a new todo
document.getElementById("add-todo-btn").addEventListener("click", async () => {
  //  write here
  const inp = document.getElementById("todo-input");

  try {
    const response = await axios.post(API_URL, { todo: inp.value });

    addTodoToDOM([{ todo: inp.value, id: response.data.todo.id }]);
    inp.value = "";
  } catch (error) {
    inp.value = "";
    console.log("Addition Error");

    console.log(error.message);
  }
});

// Toggle todo completion
function toggleTodo(id, completed) {
  //    write here
}

// Delete a todo
async function deleteTodo(id) {
  // write here

  try {
    await axios.delete(API_URL + `/${id}`);
    const response = await fetchTodos();
    document.getElementById("todo-list").innerHTML = "";
    addTodoToDOM(response);
  } catch (error) {
    console.log("Delete Error");

    console.log(error.message);
  }
}
