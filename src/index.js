import "./styles.css";
import { items } from "./modules/tasks.js";
import { Actions } from "./modules/actions.js";

const listItems = document.getElementById("todo-items");
const displayList = () => {
  let listHtml = "";
  console.log(items);
  items.forEach((item) => {
    let boxes = "";
    if (item.completed === true) {
      boxes = "checked";
    }
    listHtml += `
               <li id="list-${item.index}">
            <div class="list-wrap">
              <div><input id="checkbox" type="checkbox" ${boxes}/></div>
              <div  id= "text-input" class="text-input">
                <input
                  type="text"
                  class="list-item"
                  value="${item.description}"
                />
              </div>
              <div class="icons">
                <i id="trash-${item.index}" class="fa-solid fa-trash hide"></i>
                <i id="ellipsis-${item.index}" class="fa-solid fa-ellipsis-vertical "></i>
              </div>
            </div>
          </li>`;
  });
  listItems.innerHTML = listHtml;

  // Create event listener for list-item class
  const allTasks = document.getElementsByClassName("list-item");

  // Create event listener for allTasks
  for (let i = 0; i < allTasks.length; i++) {
    // get all li
    const lis = document.getElementsByTagName("li");
    // create event listner for all li
    lis[i].addEventListener("mouseover", (e) => {
      lis[i].classList.add("list-item-hover");
      Actions.showTrash(i);
    });

    lis[i].addEventListener("mouseout", (e) => {
      Actions.hideTrash(i);
      lis[i].classList.remove("list-item-hover");
    });

    allTasks[i].addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        console.log(event);
        event.preventDefault();
        // Get the value of the user-input
        const value = event.target.value;

        if (Actions.addTask(value, i)) {
          // Refresh the task list.
          displayList();
        }
      }
    });

    // Create an event listener on the trash icon
    document.getElementById(`trash-${i}`).addEventListener("click", (e) => {
      if (Actions.removeTask(i)) {
        displayList();
      }
    });
  }
};

displayList();

const addList = document.getElementById("addlist");

addList.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const value = addList.value;
    // Add value to task array
    items.push({
      description: value,
      completed: false,
      index: items.length,
    });
    // Clear input
    addList.value = "";

    // Store in local storage
    localStorage.setItem("tasks", JSON.stringify(items));

    console.log(items);
    displayList();
  }
});
