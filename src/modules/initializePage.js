const initializePage = () => {
    let contentContainer = document.createElement('div');
    contentContainer.id = 'contentContainer';
    contentContainer.className = 'content-container';

    let listContainer = document.createElement('div');
    listContainer.id = 'listContainer';
    listContainer.className = 'list-container';

    let listHeader = document.createElement('div');
    listHeader.innerHTML = 'Lists'

    let addListContainer = document.createElement('div');
    addListContainer.id = 'addListContainer';
    
    let listContentContainer = document.createElement('div');
    listContentContainer.id = 'listContentContainer'

    
    listContainer.appendChild(listContentContainer);
    listContainer.appendChild(addListContainer);

    let taskContainer = document.createElement('div');
    taskContainer.id = 'taskContainer';
    taskContainer.className = 'task-container';

    let addTaskContainer = document.createElement('div');
    addTaskContainer.id = 'addTaskContainer'

    let taskContentContainer = document.createElement('div');
    taskContentContainer.id = 'taskContentContainer';
    
    taskContainer.appendChild(taskContentContainer);
    taskContainer.appendChild(addTaskContainer);

    contentContainer.appendChild(listContainer);
    contentContainer.appendChild(taskContainer);

    return contentContainer;
}

export { 
    initializePage,
}