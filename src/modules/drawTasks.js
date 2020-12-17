const drawTasks = (taskArray,listArray) => {
    let div = document.createElement('div');
    div.id = "taskRowsContainer";
    div.className = 'task-rows-container';

    //Draw Task Headers
    let taskRowHeader = document.createElement('div');
    taskRowHeader.id = 'taskRowHeader';
    taskRowHeader.className = 'task-row-header';

    let checkBoxHeader = document.createElement('h3');
    checkBoxHeader.innerHTML = 'Done';
    checkBoxHeader.className = 'completed-check-box-header'

    let nameHeader = document.createElement('h3');
    nameHeader.innerHTML = 'Task';
    nameHeader.className = 'task-name-header'

    let dateHeader = document.createElement('h3');
    dateHeader.innerHTML = 'Due Date';
    dateHeader.className = 'task-date-header'

    let timeHeader = document.createElement('h3');
    timeHeader.innerHTML = 'Time';
    timeHeader.className = 'task-time-header'

    taskRowHeader.appendChild(checkBoxHeader);
    taskRowHeader.appendChild(nameHeader);
    taskRowHeader.appendChild(dateHeader);
    taskRowHeader.appendChild(timeHeader);

    div.appendChild(taskRowHeader);

    let activeListName = listArray.find(list => list.active === true).name;
    console.log(activeListName)

    //Filter the task Array to only include active list tasks

    let activeListTaskArray = taskArray.filter(task => task.list === activeListName);


    for (let i = 0; i < activeListTaskArray.length; i++) {

        let taskRow = document.createElement('div');
        taskRow.dataset.taskId = activeListTaskArray[i].id; 
        taskRow.className = 'task-row';
        taskRow.style.background = activeListTaskArray[i].color;

        let completedCheckBox = document.createElement('input');
        completedCheckBox.type = 'checkbox';
        completedCheckBox.className = 'completed-check-box';
        completedCheckBox.id = 'completedCheckBox'

        let nameP = document.createElement('p');
        nameP.innerHTML = activeListTaskArray[i].name;
        nameP.className = 'task-name'

        let dateP = document.createElement('p');
        dateP.innerHTML = activeListTaskArray[i].date;
        dateP.className = 'task-date';

        let timeP = document.createElement('p');
        timeP.innerHTML = activeListTaskArray[i].time;
        timeP.className = 'task-time'

        taskRow.appendChild(completedCheckBox);
        taskRow.appendChild(nameP);
        taskRow.appendChild(dateP);
        taskRow.appendChild(timeP);

        if (activeListTaskArray[i].active === true) {
            taskRow.className = 'task-row-active'

            let detailsP = document.createElement('p');
            detailsP.innerHTML = activeListTaskArray[i].details;
            detailsP.className = 'task-details'


            let editButton= document.createElement('button');
            editButton.className = 'edit-task-button';
            editButton.id = 'editTaskButton';
            editButton.innerHTML = 'Edit'

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete-task-button';
            deleteButton.id = 'deleteTaskButton';
            deleteButton.innerHTML = 'Delete'

            taskRow.appendChild(detailsP)
            taskRow.appendChild(editButton);
            taskRow.appendChild(deleteButton);
        }
        
        div.appendChild(taskRow);
    }

    return div;
}

export {
    drawTasks
}
