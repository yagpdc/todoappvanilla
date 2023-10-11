import './style.css'
import  {helloWorld}  from './helpers/addtask';



document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form_wrapper');
  form?.addEventListener('submit', function (event) {
    event.preventDefault();
    helloWorld();
  });
});