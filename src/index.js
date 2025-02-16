import "./styles.css";
import { Project, Todos } from "./helpers/db.js";

const projectSelect = document.querySelector("select#project-selection");
const todoTitle = document.querySelector("#todo-title");
const todoDescription = document.querySelector("#todo-description");
const todoDuedate = document.querySelector("#todo-duedate");
const todoPriority = document.querySelector("#todo-priority");
const todoSubmit = document.querySelector(
  ".todo-container button[type='submit']"
);

const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");
const projectSubmit = document.querySelector(
  ".project-container button[type='submit']"
);

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

function addTodos(index, title, description, dueDate, priority) {
  projectList[index].todos.push(
    new Todos(title, description, dueDate, priority)
  );
  console.log(projectList);
}

function addProjects(title, description) {
  projectList.push(new Project(title, description, []));
  console.log(projectList);
}

function displayProjects() {
  projectSelect.textContent = "";
  projectList.forEach((project, index) => {
    let option = document.createElement("option");
    option.textContent = project.title;
    option.value = index;
    projectSelect.appendChild(option);
  });
}

// TODO: Implement a form validation
todoSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (projectSelect != null) {
    addTodos(
      projectSelect.value,
      todoTitle.value,
      todoDescription.value,
      todoDuedate.value,
      todoPriority.value
    );
  }
});

projectSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  addProjects(projectTitle.value, projectDescription.value);
  displayProjects();
});

function init() {
  displayProjects();
}
init();
