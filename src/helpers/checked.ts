function checkInput(checkbox: HTMLInputElement) {
    const taskName = checkbox.nextElementSibling as HTMLElement; // Pegar o elemento irmão do checkbox
    if (taskName) {
        if (checkbox.checked) {
            taskName.classList.add("checked-text");
        } else {
            taskName.classList.remove("checked-text");
        }
    }
}

function handleEvent(e:any) {
    if(e.shiftKey && e.target.checked){
        console.log(e);
    }
    checkInput(e.target as HTMLInputElement);
}


export {handleEvent};