import './style.css';

import clearAllCompletedTasks from './modules/clearAllCompletedTasks.js';
import submitForm from './modules/submitForm.js';
import displayChanges from './modules/displayChanges.js';

const addNewForm = document.querySelector('#add-list-form');
const clearButton = document.querySelector('#clear-button');

if (!JSON.parse(localStorage.getItem('todolist'))) {
  localStorage.setItem('todolist', JSON.stringify([]));
}
// display
displayChanges();

// add new to do
addNewForm.addEventListener('submit', submitForm);

// clear all completed
clearButton.addEventListener('click', clearAllCompletedTasks);
