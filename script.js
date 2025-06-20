document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new tasks
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create new task item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add click event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            updateLocalStorage();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
        
        // Update local storage
        updateLocalStorage();
    }

    // Function to update local storage
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(task => {
            tasks.push(task.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from local storage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => {
            taskInput.value = task;
            addTask();
        });
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load saved tasks on page load
    loadTasks();
});
