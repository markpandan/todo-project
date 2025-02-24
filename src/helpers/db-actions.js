import {
  ProjectObject,
  TodoObject,
  ProjectConstructor,
  TodosConstructor,
} from "./db.js";

export class DatabaseConstrutor {
  constructor() {
    this.list = [];
  }

  addTodos(index, title, description, dueDate, priority) {
    this.list[index].todos.push(
      new TodosConstructor(title, description, dueDate, priority)
    );
  }

  addProjects(title, description) {
    this.list.push(new ProjectConstructor(title, description, []));
  }

  getProject(index) {
    return this.list[index];
  }
}

export class DatabaseLocalStorage {
  constructor() {
    this.list;
    this.setProject();
  }

  addTodos(index, title, description, dueDate, priority) {
    console.log(index);
    const project = JSON.parse(localStorage.getItem(index));
    console.log(project);

    const todo = TodoObject;
    todo.title = title;
    todo.descrption = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    project.todos.push(todo);

    localStorage.setItem(index, JSON.stringify(project));
    this.setProject();
  }

  addProjects(title, description) {
    const project = ProjectObject;
    project.title = title;
    project.descrtiption = description;
    localStorage.setItem(localStorage.length, JSON.stringify(project));

    this.setProject();
  }

  getProject(index) {
    return this.list[index];
  }

  setProject() {
    this.list = Object.values(localStorage)
      .map((value) => JSON.parse(value))
      .reverse();
  }
}
