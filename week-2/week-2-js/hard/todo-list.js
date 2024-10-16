/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  indexCheck(index) {
    if (index < 0 || index >= this.list.length) {
      return false;
    }

    return true;
  }

  constructor() {
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(index) {
    if (!this.indexCheck(index)) {
      return;
    }

    for (let i = index; i < this.list.length - 1; i++) {
      this.list[i] = this.list[i + 1];
    }

    this.list.pop();
  }

  update(index, todo) {
    if (!this.indexCheck(index)) {
      return;
    }
    this.list[index] = todo;
  }

  getAll() {
    return this.list;
  }

  get(index) {
    if (!this.indexCheck(index)) {
      return null;
    }
    return this.list[index];
  }

  clear() {
    this.list.length = 0;
  }
}

module.exports = Todo;
