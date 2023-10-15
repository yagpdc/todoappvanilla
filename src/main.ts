import './style.css'
import  { addtask}  from './helpers/addtask';
import { calendar } from './helpers/calendar';
import { pomodoro, start, stop, reset } from './helpers/pomodoro';

  const form = document.querySelector('#form_wrapper');
  form?.addEventListener('submit', function (event) {
    event.preventDefault();    
  });
  

  const send = document.querySelector('#send');
  send?.addEventListener('click', function (event) {
    event.preventDefault();
    addtask();
  }
  );

calendar()

const startPomodoro = document.querySelector('#start') 
const workInput = document.querySelector('#work') as HTMLInputElement
const stopPomodoro = document.querySelector('#pause')
const resetPomodoro = document.querySelector('#reset')
workInput?.addEventListener('change', pomodoro)
startPomodoro?.addEventListener('click', start)
stopPomodoro?.addEventListener('click', stop)
resetPomodoro?.addEventListener('click', reset)