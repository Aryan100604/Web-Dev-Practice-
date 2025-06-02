document.addEventListener("DOMContentLoaded", () => {
  const inputTask = document.getElementById("input-task");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("to-do-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));

  addTaskBtn.addEventListener("click", function () {
    let taskinput = inputTask.value.trim();
    if (taskinput === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskinput,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    inputTask.value = "";
    console.log(tasks);
  });

  function renderTask(task) {
    let li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });
    li.innerHTML = `<span>${task.text}</span>
    <button>Delete</button>`;

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((item) => item.id !== task.id);
      li.remove();
      saveTask();
    });

    todoList.appendChild(li);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
