
const addBtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('main'));
if(notes){
    notes.forEach(note =>{
        addNewNote(note)
    })
}
addBtn.addEventListener('click',()=>{
    addNewNote();   
});

function addNewNote(text = ''){
   const note = document.createElement('div');
   note.classList.add('note');
   
   note.innerHTML = ` 
        <div class="tools">
            <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete">
            <i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="main ${text ? '':'hidden'}"></div>    
        <textarea class="main ${text ? 'hidden':''}"></textarea>
   `;
   
   const mainEl = note.querySelector('.main');
   const editBtn = note.querySelector('.edit');
   const deleteBtn = note.querySelector('.delete');
   const textarea = note.querySelector('textarea');

   textarea.value=text;
   mainEl.innerHTML= marked(text);

   editBtn.addEventListener('click', ()=>{
        mainEl.classList.toggle('hidden')
        textarea.classList.toggle('hidden') 
   });  
   
   deleteBtn.addEventListener('click',()=>{
        note.remove();
   });
   
   textarea.addEventListener('input', (e) => {
        const {value}  = e.target;
        mainEl.innerHTML = marked(value);

        updateLS()
   });
   
   document.body.appendChild(note);
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note =>{
        notes.push(note.value)
    });

     localStorage.setItem('main', JSON.stringify(notes))
}

// =========================================================
// const addBtn = document.getElementById('add');
// addBtn.addEventListener('click',()=>{
//     addNewNote();
    
// });

// function addNewNote(){
//    const note = document.createElement('div');
//    note.classList.add('note');
   
//    note.innerHTML = ` 
//         <div class="note"> // silindi hata verdi...
//         <div class="tools">
//             <button class="edit">
//             <i class="fa-solid fa-pen-to-square"></i></button>
//             <button class="delete">
//             <i class="fa-solid fa-trash"></i></button>
//         </div>
//             <div class="main hidden"></div>    
//             <textarea></textarea>
//     </div>
//    `;
//    const notesEl = note.querySelector('.notes'); // class ismi yukarıda yani classList.add 'de belirlenir bu sebeple '.notes' -> '.main' olarak düzeltildi.
//    const editBtn = document.querySelector('.edit');
//    const deleteBtn = note.querySelector('.delete');

//    const main = note.querySelector('.main');
//    const textarea = note.querySelector('textarea')


    
//     editBtn.addEventListener('click', ()=>{
//         notesEl.classList.toggle('hidden')
//         textarea.classList.toggle('hidden')
        
//     });  
//     deleteBtn.addEventListener('click',()=>{
//         note.remove()
//     })
//     textarea.addEventListener('input', (e) => {
//         const {value}  = e.target;
//          main.innerHTML = marked(value)  
//     });
//     document.body.appendChild(note);
// }






 

