import indexSetter from './indexSetter.js';

export default function clearAllCompletedTasks(e) {
  e.preventDefault();
  let restoredData = JSON.parse(localStorage.getItem('todolist'));
  restoredData = restoredData.filter((element) => {
    if (element.complete === false) {
      return true;
    }
    return false;
  });
  localStorage.setItem('todolist', JSON.stringify(restoredData));
  indexSetter();
}
