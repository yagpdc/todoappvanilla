import ring  from "/ring.mp3";

let container = document.querySelector('#html-container')
let pomodoroTime: HTMLInputElement | null = document.querySelector('#work')
let audio = new Audio(ring);
let breakTime: HTMLInputElement | null = document.querySelector('#short')
let shortLabel = document.querySelector('#shortLabel')
let workLabel = document.querySelector('#workLabel')
let myInterval: number | null = null;
let tracker: boolean = true

function pomodoro(){
    

    let time = /*html*/ `
        <div class="time-container">
            <div class="time">
                <span id="minutes">${pomodoroTime?.value}</span>
                <span>:</span>
                <span id="seconds">00</span>
            </div>
        </div>
    `

    if(container){
        container.innerHTML = time
    }
}

function start() {
    
    let minutes = document.querySelector('#minutes') as HTMLSpanElement 
    let seconds = document.querySelector('#seconds')
    workLabel!.classList.add('highlight')
    shortLabel!.classList.remove('highlight')
    if(myInterval !== null){
        console.log('Já tem um intervalo')
    } else if(myInterval === null) {
        myInterval = setInterval(function() {
            if(seconds?.innerHTML !== "00"){
                seconds!.innerHTML = (parseInt(seconds!.innerHTML) - 1).toString().padStart(2, '0')
            } else if(minutes?.innerHTML !== "00" && seconds?.innerHTML === "00"){
                minutes!.innerHTML = (parseInt(minutes!.innerHTML) - 1).toString().padStart(2, '0')
                seconds!.innerHTML = "59"
            } else if (tracker === false){
                console.log('Pomodoro time')
                shortLabel!.classList.remove('highlight')
                workLabel!.classList.add('highlight')
                audio.play()
                
                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0; 
                }, 3000);
                minutes!.innerHTML = pomodoroTime!.value
                seconds!.innerHTML = "00"
                clearInterval(myInterval!)
                myInterval = null
                tracker = !tracker
                console.log(tracker)
            } else if (tracker === true){
                console.log('Break time')
                workLabel!.classList.remove('highlight')
                shortLabel!.classList.add('highlight')
                audio.play()
                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0; 
                }, 3000);
                minutes!.innerHTML = breakTime!.value
                seconds!.innerHTML = "00"
                clearInterval(myInterval!)
                myInterval = null
                tracker = !tracker
                console.log(tracker)
            }

        }, 1000);
    }
}

function stop() {
    console.log('Stop');
    if (myInterval !== null) {
        clearInterval(myInterval);
        myInterval = null;
    }
}

function reset(){
    let minutes = document.querySelector('#minutes') as HTMLSpanElement 
    let seconds = document.querySelector('#seconds')
    if (myInterval !== null) {
        clearInterval(myInterval);
        myInterval = null;
    }
    minutes!.innerHTML = pomodoroTime!.value
    seconds!.innerHTML = "00"
}



export {pomodoro, start, stop, reset}