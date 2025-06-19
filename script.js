
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task');
  const inputField = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = inputField.value.trim();

    // Check for empty task
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create task <li>
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task on click
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append button and list item
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear input field
    inputField.value = '';
  }

  // Add click listener to add button
  addButton.addEventListener('click', addTask);

  // Also add enter key support
  inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
