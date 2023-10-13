function calendar() {

    function getDaysInMonth(year:number, month:number) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
    }

    const calendarContainer = document.querySelector(".calendar_wrapper");

    if (calendarContainer) {
    const date = new Date(); 

    const year = date.getFullYear();
    const month = date.getMonth(); 

    const daysInMonth = getDaysInMonth(year, month);
    
    let days = [];
    for(let i = 0; i < daysInMonth; i++){
        days.push(i+1);
    }

    for (let i = 0; i < days.length; i++) {
        let today:number = new Date().getDate();
        days[i] === today ? calendarContainer.innerHTML +=/*html*/ `<div class="dias_do_mes hoje">${days[i]}</div>` : calendarContainer.innerHTML +=/*html*/ `<div class="dias_do_mes">${days[i]}</div>`;
    }
    }
}

    export {calendar};