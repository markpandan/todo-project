export function Project(title, description, todos) {
  this.title = title;
  this.description = description;
  this.todos = todos;
}

export function Todos(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}
