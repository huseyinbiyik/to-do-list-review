import indexSetter from './indexSetter.js';

export default function editTasks() {
  const taskInputList = document.querySelectorAll('.editable-input');

  taskInputList.forEach((input) => {
    input.addEventListener('click', (event) => {
      const inputSelector = event.target;
      const { parentElement } = inputSelector;
      parentElement.style.backgroundColor = 'yellow';
    });
  });

  taskInputList.forEach((input) => {
    input.addEventListener('focusout', (element) => {
      const restoredData = JSON.parse(localStorage.getItem('todolist'));
      const inputSelector = element.target;
      const { parentElement } = inputSelector;
      parentElement.style.backgroundColor = 'transparent';
      parentElement.blur();
      restoredData[element.target.getAttribute('data-index') - 1].content = element.target.value;

      localStorage.setItem('todolist', JSON.stringify(restoredData));
    });
  });

  const deleteButtons = document.querySelectorAll('.delete-icon');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (element) => {
      const restoredData = JSON.parse(localStorage.getItem('todolist'));
      const targetIndex = element.target.getAttribute('data-index') - 1;
      restoredData.splice(targetIndex, 1);
      localStorage.setItem('todolist', JSON.stringify(restoredData));
      indexSetter();
      window.location.reload();
    });
  });
}
