/* Theory

const array = [1, 2, 3, 4, 5]
const a = new Array(2, 4, 5, 'hello')

console.log(array.length)

console.log(array[2])

console.log(array[array.length - 1])
array[1] = 'hi'

*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('btn')
const listElement = document.getElementById('list')

console.log(inputElement.value)

/* createBtn.onclick = function(){
   listElement.innerHTML = `<li class="list_item">
               <span class="name">${inputElement.value}</span>
               <span class="go">&check;</span>
               <span class="not">&times;</span>
            </li>`
}
*/

// const notes = ['перемогти лінь', 'займатись кожен день']

// function render(){
//    // for (let i = 0; i<notes.length; i++){
//    //    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//    // } 
//    for(let note of notes) {
//       listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//    }
// }

// render()




// createBtn.onclick = function(){

//    if (inputElement.value.length === 0){
//       return 
//    }else{
//       listElement.insertAdjacentHTML('beforeend', 
//          getNoteTemplate(inputElement.value)
//          )
//    }
//    inputElement.value = ''
// }

// function getNoteTemplate(title){
//    return `<li class="list_item">
//          <span class="name">${title}</span>
//          <span class="go">&check;</span>
//          <span class="not">&times;</span>
//          </li>`
// }

/*

Object Theory

const person = {
   firstName: 'Volody',
   lastName: 'CD',
   year: 1995,
   getFullName: function (){
console.log(person.firstName)
   }
}
*/
 
const notes = [
   { title: 'перемогти лінь',
      completed: false,
   },
   { title: 'займатись кожен день',
      completed: true,
   }
   ]

   function render(){
      listElement.innerHTML = ''
       if (notes.length === 0){
         listElement.innerHTML = '<p class="para"> Нет Елементов</p>'
       }
      for (let i = 0; i<notes.length; i++){
         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
      } 
      // for(let note of notes) {
      //    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
      // }
   }
   
   render()

   createBtn.onclick = function(){

      if (inputElement.value.length === 0){
         return 
      }
      const newNote = {
         title: inputElement.value,
         completed:false,
      }
      notes.push(newNote)
      render()
      inputElement.value = ''
   }



listElement.onclick = function (event){
      if(event.target.dataset.index){
      const index = Number(event.target.dataset.index)
      const type = event.target.dataset.type
      if(type === 'toggle'){
      notes[index].completed = !notes[index].completed
      }else if (type === 'remove'){
        notes.splice(index, 1)
      }
      render()
      }
      
}


   function getNoteTemplate(note, index){
      return `<li class="list_item">
            <span class="name ${note.completed ? 'text-decoration': ''}">${note.title}</span>
            <span class="go ${note.completed ? 'bag': ''} " data-index="${index}" data-type ="toggle">&check;</span>
            <span class="not" data-index="${index}" data-type ="remove" >&times;</span>
            </li>`
   }