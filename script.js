
// const chores = document.querySelector('#chores');


// console.log("present chores: "+chores)

// chores.forEach(chore =>{
//     chore.addEventListener('click', () =>{
//         chore.classList.toggle('completed');
//     })
// })

const chores = document.getElementById('chores');
const form = document.querySelector('#taskForm');
const input = document.querySelector('#taskInput');
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const formModal = document.getElementById('formModal');

openFormBtn.addEventListener('click',() =>{
    formModal.style.display = 'block';
})

closeFormBtn.addEventListener('click', ()=>{
    formModal.style.display = 'none;'
})

form.addEventListener('submit', function(event){
    event.preventDefault();

    const taskText = input.value;
    console.log("Input value: "+taskText);
    const newTask = document.createElement('li');
    newTask.textContent =taskText;

    chores.appendChild(newTask);
    input.value = '';
    formModal.style.display = 'none';

})

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Get the input value
    const taskText = input.value;

    // Create a new <li> element
    const newTask = document.createElement('li');
    newTask.textContent = taskText; // Set the task text

    // Add the new <li> to the task list
    chores.appendChild(newTask);

    // Clear the input field
    input.value = '';
});


// const addButton = document.querySelector('#addButton');
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