export default function inputBoxChecker() {
  const taskCheckBoxes = document.querySelectorAll(".to-do-input");

  taskCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (element) => {
      const restoredData = JSON.parse(localStorage.getItem("todolist"));
      const targetElement = element.target;
      const targetId = targetElement.id;
      if (targetElement.checked === true) {
        restoredData[targetId - 1].complete = true;
      } else {
        restoredData[targetId - 1].complete = false;
      }
      localStorage.setItem("todolist", JSON.stringify(restoredData));
    });
  });
}
