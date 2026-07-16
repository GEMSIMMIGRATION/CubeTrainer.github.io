const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><button class="delete-btn">Delete</button>`;
    
    li.querySelector('.delete-btn').addEventListener('click', () => li.remove());
    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });
