const drawTasks = (taskArray, listArray) => {
  const div = document.createElement('div');
  div.id = 'taskRowsContainer';
  div.className = 'task-rows-container';

  // Draw Task Headers
  const taskRowHeader = document.createElement('div');
  taskRowHeader.id = 'taskRowHeader';
  taskRowHeader.className = 'task-row-header';

  const checkBoxHeader = document.createElement('h3');
  checkBoxHeader.innerHTML = 'Done';
  checkBoxHeader.className = 'completed-check-box-header';

  const nameHeader = document.createElement('h3');
  nameHeader.innerHTML = 'Task';
  nameHeader.className = 'task-name-header';

  const dateHeader = document.createElement('h3');
  dateHeader.innerHTML = 'Due Date';
  dateHeader.className = 'task-date-header';

  const timeHeader = document.createElement('h3');
  timeHeader.innerHTML = 'Time';
  timeHeader.className = 'task-time-header';

  taskRowHeader.appendChild(checkBoxHeader);
  taskRowHeader.appendChild(nameHeader);
  taskRowHeader.appendChild(dateHeader);
  taskRowHeader.appendChild(timeHeader);

  div.appendChild(taskRowHeader);

  const activeListName = listArray.find((list) => list.active === true).name;

  // Filter the task Array to only include active list tasks

  const activeListTaskArray = taskArray.filter(
    (task) => task.list === activeListName
  );

  for (let i = 0; i < activeListTaskArray.length; i++) {
    const taskRow = document.createElement('div');
    taskRow.dataset.taskId = activeListTaskArray[i].id;
    taskRow.className = 'task-row';
    taskRow.style.background = activeListTaskArray[i].color;

    const completedCheckBox = document.createElement('input');
    completedCheckBox.type = 'checkbox';
    completedCheckBox.className = 'completed-check-box';
    completedCheckBox.id = 'completedCheckBox';

    const nameP = document.createElement('p');
    nameP.innerHTML = activeListTaskArray[i].name;
    nameP.className = 'task-name';

    const dateP = document.createElement('p');
    dateP.innerHTML = activeListTaskArray[i].date;
    dateP.className = 'task-date';

    const timeP = document.createElement('p');
    timeP.innerHTML = activeListTaskArray[i].time;
    timeP.className = 'task-time';

    taskRow.appendChild(completedCheckBox);
    taskRow.appendChild(nameP);
    taskRow.appendChild(dateP);
    taskRow.appendChild(timeP);

    if (activeListTaskArray[i].active === true) {
      taskRow.className = 'task-row-active';

      const detailsP = document.createElement('p');
      detailsP.innerHTML = activeListTaskArray[i].details;
      detailsP.className = 'task-details';

      const editButton = document.createElement('button');
      editButton.className = 'edit-task-button';
      editButton.id = 'editTaskButton';
      editButton.innerHTML = 'Edit';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-task-button';
      deleteButton.id = 'deleteTaskButton';
      deleteButton.innerHTML = 'Delete';

      taskRow.appendChild(detailsP);
      taskRow.appendChild(editButton);
      taskRow.appendChild(deleteButton);
    }

    div.appendChild(taskRow);
  }

  return div;
};

export { drawTasks };
