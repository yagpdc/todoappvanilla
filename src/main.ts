import './style.css'
import  { addtask}  from './helpers/addtask';
import { calendar } from './helpers/calendar';
import { pomodoro } from './helpers/pomodoro';

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






pomodoro()
