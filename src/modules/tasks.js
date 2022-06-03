// Get tasks from local storage or return empty array.
export let items =
  localStorage.getItem("tasks") === null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));
