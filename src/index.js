import "./styles.css";
import { projectList, addTodos, addProjects } from "./helpers/db-actions.js";

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

function displayProjects() {
  projectSelect.textContent = "";
  projectList.forEach((project, index) => {
    let option = document.createElement("option");
    option.textContent = project.title;
    option.value = index;
    projectSelect.appendChild(option);
  });
}

function init() {
  displayProjects();
}
init();
