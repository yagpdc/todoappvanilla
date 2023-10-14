function calendar() {
    const calendarContainer = document.querySelector(".calendar_wrapper");
    let days = [];
    let today = new Date().getDate();

    function getDaysInMonth(year:number, month:number) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
    }
    
    if (calendarContainer) {
        const date = new Date(); 
        const year = date.getFullYear();
        const month = date.getMonth(); 
        const daysInMonth = getDaysInMonth(year, month);

    for(let i = 0; i < daysInMonth; i++){
        days.push(i+1);
    }

    days.forEach(day => day === today ? calendarContainer.innerHTML +=/*html*/ `<div class="dias_do_mes hoje">${day}</div>` : calendarContainer.innerHTML +=/*html*/ `<div class="dias_do_mes">${day}</div>`);    
    };
}

    export {calendar};