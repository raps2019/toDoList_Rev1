const drawNewListButton = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "newListButtonContainer");

  const button = document.createElement("button");
  button.setAttribute("id", "newListButton");
  button.setAttribute("class", "new-list-button");
  button.innerHTML = "+ Add New List";

  div.appendChild(button);

  return div;
};

const drawNewTaskButton = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "newTaskButtonContainer");

  const button = document.createElement("button");
  button.setAttribute("id", "newTaskButton");
  button.setAttribute("class", "new-task-button");
  button.innerHTML = "+ Add New Task";

  div.appendChild(button);

  return div;
};

export { drawNewListButton, drawNewTaskButton };
