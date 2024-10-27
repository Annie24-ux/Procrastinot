
const chores = document.querySelectorAll('chores');

chores.forEach(chore =>{
    chore.addEventListener('click', () =>{
        chore.classList.toggle('completed');
    })
})


// Select elements
const form = document.querySelector('taskForm');
const input = document.querySelector('taskInput');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Get the input value
    const taskText = input.value;

    // Create a new <li> element
    const newTask = document.createElement('li');
    newTask.textContent = taskText; // Set the task text

    // Add the new <li> to the task list
    choices.appendChild(newTask);

    // Clear the input field
    input.value = '';
});


const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');

// addButton.addEventListener('click', () =>{
//     const newTask = document.createElement('li');
//     const newTaskText = document.createTextNode('');

//     newTask.append(newTaskText);
//     chores.appendChild(newTask);
// })


removeButton.addEventListener('click', ()=>{
    const toBeRemoved = document.querySelector('li:nth-child(2)')

chores.removeChild(toBeRemoved);    
})