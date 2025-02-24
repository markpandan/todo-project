export function ProjectConstructor(title, description, todos) {
  this.title = title;
  this.description = description;
  this.todos = todos;
}

export function TodosConstructor(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

export const ProjectObject = {
  title: "",
  description: "",
  todos: [],
};

export const TodoObject = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
};
