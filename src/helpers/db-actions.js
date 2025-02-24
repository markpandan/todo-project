import { Project, Todos } from "./db.js";

let newTodos = [
  new Todos("Meeting", "Start planning", "March 2024", "High"),
  new Todos(
    "Implementation",
    "Initial project execution",
    "April 2024",
    "Medium"
  ),
];

let newTodos2 = [
  new Todos("Meeting", "Start planning", "March 2024", "High"),
  new Todos(
    "Implementation",
    "Initial project execution",
    "April 2024",
    "Medium"
  ),
];

export let projectList = [];
projectList.push(new Project("New Workspace", "My Initial Work", newTodos));
projectList.push(new Project("ToDo Project", "My Initial Work", newTodos2));

export function addTodos(index, title, description, dueDate, priority) {
  projectList[index].todos.push(
    new Todos(title, description, dueDate, priority)
  );
}

export function addProjects(title, description) {
  projectList.push(new Project(title, description, []));
  console.log(projectList);
}

projectList[0].todos.push(
  new Todos("title", "description", "dueDate", "priority")
);
