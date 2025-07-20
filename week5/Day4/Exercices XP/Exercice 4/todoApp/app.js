import TodoList from "./todo.js";

const todoList = new TodoList();
todoList.ajouterTodo("Faire les courses");
todoList.ajouterTodo("Aller à la gym");

todoList.listTask();
todoList.marquerTache(0);
todoList.listTask();
