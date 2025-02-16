import { Project, Todos } from "./helpers/db.js";

let newTodos = [
  new Todos("Meeting", "Start planning", "March 2024", "High"),
  new Todos(
    "Implementation",
    "Initial project execution",
    "April 2024",
    "Medium"
  ),
];

let projectList = [];
let project = new Project("New Workspace", "My Initial Work", newTodos);
projectList.push(project);
projectList.push(new Project("ToDo Project", "My Initial Work", newTodos));

export function addTodos(index, title, description, dueDate, priority) {
  projectList[index].todos.push(
    new Todos(title, description, dueDate, priority)
  );
  console.log(projectList);
}

export function addProjects(title, description) {
  projectList.push(new Project(title, description, []));
  console.log(projectList);
}
