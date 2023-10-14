import { handleEvent } from "./checked";


let taskInput = document.querySelector('#task') as HTMLInputElement;
let container = document.querySelector('#task_wrapper')

const addtask = () => {
    let task =/*html*/`
    <div class="task_item">
        <div class="task_item_text">
            <input type="checkbox" class="radio_input">
            <p>${taskInput.value}</p>
        </div>
        <div class="task_item_btn">
        <button id="delete" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
        </div>
    </div>`

        const input = document.querySelector('#task') as HTMLInputElement;
        if(input.value === "") return alert('Digite uma tarefa');
        let child = document.createElement('div');
        child.innerHTML = task;
        container?.appendChild(child); 


        const checkboxes = document.querySelectorAll('.radio_input') as NodeListOf<HTMLInputElement>;
        [...checkboxes].forEach(checkbox => {
            checkbox.addEventListener('click', handleEvent); 
        });
        const deleteBtn = document.querySelectorAll('#delete') as NodeListOf<HTMLButtonElement>;
        [...deleteBtn].forEach(btn => {
            btn.addEventListener('click', () => btn.parentElement?.parentElement?.remove()); // Passar o checkbox atual como argumento
        }); 
        
    taskInput.value = "";
}

export {addtask, handleEvent};




