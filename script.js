 document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Add new task
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Also allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false); // false = don't save to storage again
        });
    }

    // Main function to add tasks (with optional storage saving)
    function addTask(taskText, saveToStorage = true) {
        createTaskElement(taskText, saveToStorage);
        
        if (saveToStorage) {
            updateLocalStorage();
        }
    }

    // Helper function to create task DOM elements
    function createTaskElement(taskText, saveToStorage) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function() {
            taskItem.remove();
            updateLocalStorage();
        });
        
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);
        
        if (saveToStorage) {
            updateLocalStorage();
        }
    }

    // Update Local Storage with current tasks
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('.task-item span').forEach(task => {
            tasks.push(task.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
