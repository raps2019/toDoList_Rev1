const initializePage = () => {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  contentContainer.className = 'content-container';

  const listContainer = document.createElement('div');
  listContainer.id = 'listContainer';
  listContainer.className = 'list-container';

  const listHeader = document.createElement('div');
  listHeader.innerHTML = 'Lists';

  const addListContainer = document.createElement('div');
  addListContainer.id = 'addListContainer';

  const listContentContainer = document.createElement('div');
  listContentContainer.id = 'listContentContainer';

  listContainer.appendChild(listContentContainer);
  listContainer.appendChild(addListContainer);

  const taskContainer = document.createElement('div');
  taskContainer.id = 'taskContainer';
  taskContainer.className = 'task-container';

  const addTaskContainer = document.createElement('div');
  addTaskContainer.id = 'addTaskContainer';

  const taskContentContainer = document.createElement('div');
  taskContentContainer.id = 'taskContentContainer';

  taskContainer.appendChild(taskContentContainer);
  taskContainer.appendChild(addTaskContainer);

  contentContainer.appendChild(listContainer);
  contentContainer.appendChild(taskContainer);

  return contentContainer;
};

export {
  initializePage,
};
