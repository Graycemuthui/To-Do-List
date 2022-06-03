import "./styles.css";
import items from "./modules/tasks.js";

const listItems = document.getElementById("todo-items");
const displayList = () => {
  items.forEach((item) => {
    const loop = listItems.innerHTML;
    let boxes = "";
    if (item.completed === true) {
      boxes = "checked";
    }
    listItems.innerHTML = `
               ${loop}<li>
            <div class="list-wrap">
              <div><input type="checkbox" ${boxes}/></div>
              <div class="text-input">
                <input
                  type="text"
                  class="list-item"
                  value="${item.description}"
                />
              </div>
              <div class="icons">
                <i id="trash - ${item.index}" class="fa-solid fa-trash hide"></i>
                <i id="ellipsis-${item.index}" class="fa-solid fa-ellipsis-vertical "></i>
              </div>
            </div>
          </li>`;
  });
};

displayList();
