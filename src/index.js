import './styles.css';
import items from './modules/tasks.js';
import { Actions } from './modules/actions.js';

const listItems = document.getElementById('todo-items');
const displayList = () => {
  let listHtml = '';
  items.forEach((item) => {
    let boxes = '';
    let checkMark = '';
    if (item.completed === true) {
      boxes = 'checked';
      checkMark = 'check-mark';
    }
    listHtml += `
               <li id="list-${item.index}">
            <div class="list-wrap">
              <div><input id="checkbox-${item.index}" name="ch-${item.index}" type="checkbox" ${boxes}/></div>
              <div  id= "text-input" class="text-input">
                <input
                  id="task-desc-${item.index}"
                  type="text"
                  class="list-item ${checkMark}"
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
  const allTasks = document.getElementsByClassName('list-item');

  // Create event listener for allTasks
  for (let i = 0; i < allTasks.length; i += 1) {
    // get all li
    const lis = document.getElementsByTagName('li');
    // create event listner for all li
    lis[i].addEventListener('mouseover', () => {
      lis[i].classList.add('list-item-hover');
      Actions.showTrash(i);
    });

    lis[i].addEventListener('mouseout', () => {
      Actions.hideTrash(i);
      lis[i].classList.remove('list-item-hover');
    });

    allTasks[i].addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Get the value of the user-input
        const { value } = event.target;

        if (Actions.addTask(value, i)) {
          // Refresh the task list.
          displayList();
        }
      }
    });

    // Create an event listener on the trash icon
    document.getElementById(`trash-${i}`).addEventListener('click', () => {
      if (Actions.removeTask(i)) {
        displayList();
      }
    });

    // Let's add an event listener to the checkbox
    const checkbox = document.getElementById(`checkbox-${i}`);
    checkbox.addEventListener('click', () => {
      // add checked class to the input
      document.querySelector(`#task-desc-${i}`).classList.add('checked-mark');

      if (checkbox.checked) {
        items[i].completed = true;
      } else {
        items[i].completed = false;
      }
      // Update the items in our array
      localStorage.setItem('tasks', JSON.stringify(items));
      displayList();
    });
  }
};

displayList();

const addList = document.getElementById('addlist');

addList.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const { value } = addList;
    // Add value to task array
    items.push({
      description: value,
      completed: false,
      index: items.length,
    });
    // Clear input
    addList.value = '';

    // Store in local storage
    localStorage.setItem('tasks', JSON.stringify(items));

    displayList();
  }
});

// Create an event listener for the clear all button
const clearAll = document.getElementById('clear-all');
clearAll.addEventListener('click', () => {
  // Remove al completed tasks
  const clear = items.filter((item) => item.completed === true);

  clear.forEach((item) => {
    items.splice(item.index, 1);
    // reorder the index of the objects in the array
    items.forEach((item, index) => {
      item.index = index;
    });
  });
  // Store in local storage
  localStorage.setItem('tasks', JSON.stringify(items));
  // Refresh the task list.
  displayList();
});
