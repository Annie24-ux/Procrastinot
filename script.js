
const chores = document.querySelectorAll('li');

chores.forEach(chore =>{
    chore.addEventListener('click', () =>{
        chore.classList.toggle('completed');
    })
})