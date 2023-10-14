function pomodoro(){
    let container = document.querySelector('#html-container')
      
    let time =/*html*/`
    <div class="time-container">
      <div class="time">
        <span id="minutes">25</span>
          <span>:</span>
        <span id="seconds">00</span>
      </div>
    </div>
    `
    if(container){
      container.innerHTML = time
    }
    }

export {pomodoro}