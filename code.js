// Query for the submit button and input task field
const submit = document.querySelector('#submit-button');
const newTask = document.querySelector('#new-task-field');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', function() {
    submit.disabled = !this.value;
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default submission of the form

    // Find the task the user just submitted
    const taskText = newTask.value;

    // Create a list item for the new task and add the task to it
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add new element to our unordered list
    document.querySelector('ul').append(li);

    // Clear the input field and disable the submit button again
    newTask.value = '';
    submit.disabled = true;

    return false;
});
