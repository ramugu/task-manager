// Sample array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskHead = document.getElementById('taskHead').value;
    const taskDescription = document.getElementById('taskDescription').value;

    // Validate inputs
    if (taskHead.trim() === '' || taskDescription.trim() === '') {
        alert('Please enter both task head and description.');
        return;
    }

    // Create a task object
    const task = { taskHead, taskDescription };

    // Add the task to the array
    tasks.push(task);

    // Clear the form
    document.getElementById('taskForm').reset();

    // Display tasks
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    for (let i = 0; i < tasks.length; i += 3) {
        const rowHtml = '<div class="row mb-3"></div>';
        taskListContainer.innerHTML += rowHtml;

        for (let j = i; j < i + 3 && j < tasks.length; j++) {
            const task = tasks[j];
            const cardHtml = `
                <div class="col-md-4 card1">
                    <div class="card" style="width: 20rem;min-height:18rem;">
                        <div class="card-body " ">
                            <h5 class="card-title d-flex justify-content-between align-items-center">
                                ${task.taskHead}
                                <span>
                                    <button href="#" class="card-link btn btn-danger" onclick="deleteTask(${j})">Delete</button>
                                    <button href="#" class="card-link btn btn-info" onclick="editTask(${j})">Edit</button>
                                </span>
                            </h5>
                            <p class="card-text">${task.taskDescription}</p>
                        </div>
                    </div>
                </div>
            `;
            const row = taskListContainer.lastElementChild;
            row.innerHTML += cardHtml;
        }
    }
}


// Function to delete a task
function deleteTask(index) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');

    if (confirmDelete) {
        tasks.splice(index, 1);
        displayTasks();
        alert('Task deleted successfully!');
    }
}

// Function to edit a task (just an example, you can implement your own editing logic)
function editTask(index) {
    const newTaskHead = prompt('Enter new task head:');
    const newTaskDescription = prompt('Enter new task description:');

    if (newTaskHead !== null && newTaskDescription !== null) {
        tasks[index].taskHead = newTaskHead;
        tasks[index].taskDescription = newTaskDescription;
        displayTasks();
        alert('Task edited successfully!');
    }
}
