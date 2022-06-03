// Get tasks from local storage or return empty array.

const items = localStorage.getItem('tasks') === null
  ? []
  : JSON.parse(localStorage.getItem('tasks'));
export default items;
