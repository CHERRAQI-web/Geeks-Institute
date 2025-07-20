class TodoList {
  constructor() {
    this.task = [];
  }

  ajouterTodo(todo) {
    const task = {
      todo,
      done: false,
    };
    this.task.push(task);
    console.log("Tâche ajoutée :", task);
  }

  marquerTache(index) {
    if (index >= 0 && index < this.task.length) {
      this.task[index].done = true;
      console.log(`Tâche terminée : "${this.task[index].todo}"`);
    } else {
      console.log(`Index invalide (${index})`);
    }
  }

  listTask() {
    if (this.task.length === 0) {
      console.log("Aucune tâche à afficher.");
    } else {
      this.task.forEach((tache, index) => {
        const status = tache.done ? "terminée" : "en cours";
        console.log(`${index}. ${status} - ${tache.todo}`);
      });
    }
  }
}

export default TodoList;
