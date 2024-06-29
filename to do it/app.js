const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.innerText = taskText;
        taskList.appendChild(li);
        newTaskInput.value = '';
    }
}