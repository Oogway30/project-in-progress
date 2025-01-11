let submit_button = document.querySelector('.todo-content-submission')
let all_filter = document.querySelector('.all')
let done_filter = document.querySelector('.done') 
let pending_filter = document.querySelector('.pending')
let biggest_biggest_div = document.querySelector('.todos') 
let delete_buttons = document.querySelectorAll('.delete')
let todoses = document.querySelector('.todoses')
/*<div class="todo-all">
<div class="todoses">
<p class="content">walk the dog.</p>
</div>
<div class="button-div">
<input type="button" class="delete" value="Delete" />
</div>
</div> */

submit_button.addEventListener('click',()=>{
    
    let todo_content = document.querySelector('.todo-content').value
    
    if (todo_content) {
        
        
        
        let biggest_div = document.createElement('div')  //creating the biggest div
    
        biggest_div.setAttribute('class','todo-all') 
        
        let new_todo = document.createElement('div')
        
        new_todo.setAttribute('class','todoses')
        
        let new_p = document.createElement('p')
        
        new_p.innerHTML=todo_content
        
        new_p.setAttribute('class','content')
        
        new_todo.append(new_p)
        
        let delete_button_div = document.createElement('div')
        
        delete_button_div.setAttribute('class','button-div')
        
        let input_delete = document.createElement('input')
        
        input_delete.setAttribute('type','button')
        
        input_delete.setAttribute('class','delete')
        
        input_delete.value = 'Delete'
        
        biggest_div.append(new_todo)
        
        biggest_biggest_div.append(biggest_div)
        
        delete_button_div.append(input_delete)
        
        biggest_div.append(delete_button_div)
        
        document.querySelector('#input-field').value=''
        
        delete_buttons = document.querySelectorAll('.delete')
        delete_buttons.forEach((element) => {
            element.addEventListener('click', () => {
                element.parentElement.parentElement.remove(); // Remove the clicked element
            });
        });
    } else {
        alert('Enter the value for the To-Do')
    }
})



todoses.addEventListener('click',()=>{
    if(todoses.style.backgroundColor=='#3D315F'){
        todoses.style.backgroundColor='blue'
    }
})

