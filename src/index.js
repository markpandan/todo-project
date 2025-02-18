import "./css/styles.css";
import { projectList, addTodos, addProjects } from "./helpers/db-actions.js";

let currentProjectIndex = 0;
const projectSelect = document.querySelector("select#project-selection");

// TODO: Implement a form validation
const projectForm = document.querySelector("#project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    projectTitle: projectForm["project-title"].value,
    projectDescription: projectForm["project-description"].value,
  };

  addProjects(formData.projectTitle, formData.projectDescription);
  displayProjects();
});

const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    projectSelection: todoForm["project-selection"].value,
    todoTitle: todoForm["todo-title"].value,
    todoDescription: todoForm["todo-description"].value,
    todoDuedate: todoForm["todo-duedate"].value,
    todoPriority: todoForm["todo-priority"].value,
  };

  if (formData.projectSelection != null) {
    addTodos(
      formData.projectSelection,
      formData.todoTitle,
      formData.todoDescription,
      formData.todoDuedate,
      formData.todoPriority
    );
  }
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
