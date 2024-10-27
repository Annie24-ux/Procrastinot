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

function hasValidInput(text){
    return text.length >= 3;
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const taskText = input.value;

    if(!hasValidInput(taskText)){
        alert("Please enter at least 3 characters.");
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent =taskText;

    newTask.addEventListener('click', ()=>{
        newTask.classList.toggle('completed');
    })

    chores.appendChild(newTask);
    input.value = '';
    formModal.style.display = 'none';

})


const removeButton = document.querySelector('#removeButton');
removeButton.addEventListener('click', ()=>{
    const toBeRemoved = document.querySelector('li:nth-child(2)')

chores.removeChild(toBeRemoved);    
})