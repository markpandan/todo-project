import "./css/styles.css";
import { DatabaseLocalStorage } from "./helpers/db-actions.js";
import dialog from "./components/dialog.js";
import form from "./components/form.js";

const projects = new DatabaseLocalStorage();

const todoHeader = document.querySelector(".content-header > h1");
const dialogProject = dialog(
  ".dialog-project",
  "#addProject",
  ".dialog-project .dialog-close"
);

const dialogTodo = dialog(
  ".dialog-todo",
  "#addTodo",
  ".dialog-todo .dialog-close"
);

form("#project-form", (formDOM) => {
  const formData = {
    projectTitle: formDOM["project-title"].value,
    projectDescription: formDOM["project-description"].value,
  };
  projects.addProjects(...Object.values(formData));
  displayProjects();

  dialogProject.close();
});

form("#todo-form", (formDOM) => {
  const formData = {
    projectSelection: formDOM["project-selection"].value,
    todoTitle: formDOM["todo-title"].value,
    todoDescription: formDOM["todo-description"].value,
    todoDuedate: formDOM["todo-duedate"].value,
    todoPriority: formDOM["todo-priority"].value,
  };

  if (formData.projectSelection != null) {
    projects.addTodos(...Object.values(formData));
  }

  dialogTodo.close();
  init(formData.projectSelection);
});

function displayProjects() {
  const projectSelect = document.querySelector("select#project-selection");
  const projectButtonGroup = document.querySelector(".project-buttonGroup");

  projectSelect.textContent = "";
  projectButtonGroup.textContent = "";
  projects.list.forEach((project, index) => {
    console.log(project);
    let option = document.createElement("option");
    option.textContent = project.title;
    option.value = index;
    projectSelect.appendChild(option);

    projectButtonGroup.innerHTML += `<li data-index=${index}>${project.title}</li>`;
  });

  projectButtonGroup.addEventListener("click", (e) => {
    if (e.target.localName === "li") {
      todoHeader.textContent = e.target.innerHTML;
      displayTodo(e.target.dataset.index);
    }
  });
}

function displayTodo(index) {
  const todoList = document.querySelector(".todo-list");
  todoList.textContent = "";

  let project;
  if ((project = projects.getProject(index))) {
    todoHeader.textContent = project.title;
    project.todos.forEach((todos) => {
      const todoCard = document.createElement("div");
      todoCard.classList.add("todo-card");
      todoCard.innerHTML = `<section class="todo-card-header">
                              <div>
                                <h2>${todos.title}</h2>
                                <h5>${todos.dueDate}</h5>
                              </div>
                                <h5>${todos.priority}</h5>
                            </section>
                            <article>
                              ${todos.description}
                            </article>`;
      todoList.appendChild(todoCard);
    });
  }
}

function init(index = 0) {
  localStorage.clear();
  displayProjects();
  displayTodo(index);
}
init();
