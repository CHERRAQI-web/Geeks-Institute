const tasks = [];
let taskIdCounter = 0;

function addTask(event) {
  event.preventDefault();

  const input = document.querySelector("input");
  const taskValue = input.value.trim();

  if (taskValue !== "") {
   const newTask = {
      task_id: taskIdCounter++,
      text: taskValue,
      done: false
    };

    tasks.push(newTask);


    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");
    taskDiv.setAttribute("data-task-id", newTask.task_id);

    
    

    // 3. Icône croix Font Awesome
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";
    icon.style.color = "red";
    icon.style.cursor = "pointer";
    icon.addEventListener("click", () => deleteTask(newTask.task_id, taskDiv));
// 1. Checkbox
    const check = document.createElement("input");
    check.type = "checkbox";    
    check.addEventListener("change", () => doneTask(newTask.task_id, check, taskText));


// 2. Texte
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    // Assemblage dans le bon ordre
     taskDiv.appendChild(icon);
     taskDiv.appendChild(check);
    taskDiv.appendChild(taskText);
   

    document.querySelector(".listTasks").appendChild(taskDiv);
    input.value = "";
  }
}
function doneTask(task_id, checkbox, textSpan) {
  const task = tasks.find(t => t.task_id === task_id);
  if (task) {
    task.done = checkbox.checked;
    textSpan.style.textDecoration = task.done ? "line-through" : "none";
    textSpan.style.color = task.done ? "red" : "black";
  }
}

function deleteTask(task_id, taskDiv) {
  const index = tasks.findIndex(t => t.task_id === task_id);
  if (index !== -1) {
    tasks.splice(index, 1); // supprime du tableau
    taskDiv.remove();       // supprime du DOM
  }
}