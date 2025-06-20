document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        
        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add click handler to remove button
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    
    // Add task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    function addTask() {
    // Get and trim input value
    const taskText = taskInput.value.trim();
    
    // Validate input
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Rest of implementation...
}
    // Create task element
const li = document.createElement('li');
li.textContent = taskText;

// Create remove button
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.className = 'remove-btn';

// Add removal functionality
removeBtn.onclick = function() {
    taskList.removeChild(li);
};

// Append elements
li.appendChild(removeBtn);
taskList.appendChild(li);

// Clear input
taskInput.value = '';
    // Button click listener
addButton.addEventListener('click', addTask);

// Enter key listener
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
});
