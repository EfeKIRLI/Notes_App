
const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');


const main = notesEl.querySelector('.main');
const textarea = notesEl.querySelector('textarea')


editBtn.addEventListener('click',()=>{
    notesEl.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
})   

textarea.addEventListener('input', (e) => {
    const {value}  = e.target;
     main.innerHTML = marked(value)  
})