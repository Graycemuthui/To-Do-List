import './styles.css';
import items from './modules/tasks.js';

const listItems = document.getElementById('todo-items');
const displayList = () => {
  for (let i = 0; i < items.length; i += 1) {
    const loop = listItems.innerHTML;
    let boxes = '';
    if (items[i].completed === true) {
      boxes = 'checked';
    }
    listItems.innerHTML = `
               <li>
            <div class="list-wrap">
              <div><input type="checkbox" ${boxes}/></div>
              <div class="text-input">
                <input
                  type="text"
                  class="list-item"
                  value="${items[i].description}"
                />
              </div>
              <div class="icons">
                <i id="trash - ${items[i].index}" class="fa-solid fa-trash hide"></i>
                <i id="ellipsis-${items[i].index}" class="fa-solid fa-ellipsis-vertical "></i>
              </div>
            </div>
          </li> ${loop}`;
  }
};

displayList();
