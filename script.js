const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.className = "task";

    li.innerHTML = `
        <div class="task-left">

            <input
                type="checkbox"
                onchange="completeTask(this)"
            >

            <span>${taskText}</span>

        </div>

        <button
            class="delete-btn"
            onclick="deleteTask(this)"
        >
            Delete
        </button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function completeTask(checkbox) {

    const task = checkbox.parentElement.parentElement;

    task.classList.toggle("completed");
}

function deleteTask(button) {

    const task = button.parentElement;

    task.remove();
}