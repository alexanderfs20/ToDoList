
const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const pendingCount = document.querySelector("#pendingCount");

let tasks = [];

addButton.addEventListener("click", function() {
    const taskName = taskInput.value;

    if (taskName === "") {
        alert("Masukkan pekerjaan terlebih dahulu!");
        return;
    }

    const task = {
        name: taskName,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";

    let pending = 0;

    tasks.forEach(function(task, index) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        if (task.completed === true) {
            taskDiv.classList.add("completed");
        } else {
            pending++;
        }

        const taskText = document.createElement("span");
        taskText.textContent = task.name;

        const checkButton = document.createElement("button");
        checkButton.textContent = task.completed ? "Batal" : "Selesai";

        checkButton.addEventListener("click", function() {
            task.completed = !task.completed;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(checkButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
    });

    pendingCount.textContent = pending;
}