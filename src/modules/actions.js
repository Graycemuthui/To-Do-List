import { items } from "./tasks";

export class Actions {
  static showTrash = (i) => {
    // show the trash icon and hide the ellipsis icon
    document.getElementById(`trash-${i}`).classList.remove("hide");
    document.getElementById(`ellipsis-${i}`).classList.add("hide");
  };

  static hideTrash = (i) => {
    // hide the trash icon and show the ellipsis icon
    document.getElementById(`trash-${i}`).classList.add("hide");
    document.getElementById(`ellipsis-${i}`).classList.remove("hide");
  };

  static removeTask = (i) => {
    // Remove the task from the array
    items.splice(i, 1);
    // Reorder the index of tthe objects in the array
    items.forEach((item, index) => {
      item.index = index;
    });
    // Store in local storage
    localStorage.setItem("tasks", JSON.stringify(items));
    // Refresh the task list.
    return true;
  };

  static addTask = (description, i) => {
    // Get the value of the user-input
    // Update the specific tasks in our array
    items[i].description = description;
    // Store in local storage
    localStorage.setItem("tasks", JSON.stringify(items));
    // Refresh the task list.
    return true;
  };
}
