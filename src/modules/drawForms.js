//Draw Add New List Form
const drawNewListForm = () => {
    let div = document.createElement('div');
    div.id = "newListFormContainer"
    div.className = "new-list-form-container"

    let input = document.createElement('input');
    input.placeholder = 'Enter List Name';
    input.id = 'newListInput';
    input.className = 'new-list-input'

    let submitButton = document.createElement('button');
    submitButton.id = 'submitListButton';
    submitButton.className = 'submit-list-button';
    submitButton.innerHTML = 'Add';

    let cancelButton = document.createElement('button');
    cancelButton.id = 'cancelListFormButton';
    cancelButton.className = 'cancel-list-form-button';
    cancelButton.innerHTML = 'Cancel';
    
    div.appendChild(input);
    div.appendChild(submitButton);
    div.appendChild(cancelButton);

    return div;
}

//Draw Edit List Form
const drawEditListForm = (listArray,id,target) => {

    let input = document.createElement('input');
    let listName = listArray.find(list => list.id === id).name;
    input.value = listName;
    input.id = 'editListInput';
    input.className = 'edit-list-input'

    let submitButton = document.createElement('button');
    submitButton.id = 'saveListButton';
    submitButton.className = 'save-list-button';
    submitButton.innerHTML = 'Save';

    let cancelButton = document.createElement('button');
    cancelButton.id = 'cancelEditListFormButton';
    cancelButton.className = 'cancel-edit-list-form-button';
    cancelButton.innerHTML = 'Cancel';
    
    target.appendChild(input);
    target.appendChild(submitButton);
    target.appendChild(cancelButton);
}

const drawNewTaskForm = () => {
    let form = document.createElement('form');
    form.id = "newTaskFormContainer";
    form.className = "new-task-form-container"

    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'taskNameInput'
    nameInput.className = 'task-name-input'
    nameInput.placeholder = 'Task Name'

    // let dateInputLabel = document.createElement('label');
    // dateInputLabel.innerHTML = 'Set date'

    let dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.placeholder = 'Date';
    dateInput.setAttribute('onfocus',`(this.type='date')`)
    dateInput.id = 'taskDateInput';
    dateInput.className = 'task-date-input';

    // let timeInputLabel = document.createElement('label');
    // timeInputLabel = "Set time"

    let timeInput = document.createElement('input');
    timeInput.type = 'text';
    timeInput.placeholder = 'Time';
    timeInput.setAttribute('onfocus',`(this.type='time')`)
    timeInput.id = 'taskTimeInput';
    timeInput.className = 'task-time-input';

    let selectColorLabel = document.createElement('label');
    selectColorLabel.innerHTML = 'Select Color:';
    selectColorLabel.className = 'select-color-label';
    selectColorLabel.id = 'selectColorLabel'

    let colorSelector = document.createElement('select');
    colorSelector.id = 'colorSelector';
    colorSelector.className = 'color-selector'

    let colorArray = ['#FFFFFF','#FF9AA2','#FFB7B2','#FFDAC1','#E2F0CB','#B5EAD7', '#C7CEEA']

    for (let i = 0; i < colorArray.length; i++) {
        let option = document.createElement('option');
        option.value = colorArray[i];
        option.id = `color-option-${colorArray[i]}`
        option.className = 'color-option'
        option.style.background = `${colorArray[i]}`;
        colorSelector.appendChild(option);
    }

    let detailsInput = document.createElement('textarea');
    detailsInput.placeholder = "Details";
    detailsInput.id = 'taskDetailsInput';
    detailsInput.className = 'task-details-input';

    let submitButton = document.createElement('button');
    submitButton.id = 'submitTaskButton';
    submitButton.className = 'submit-task-button';
    submitButton.innerHTML = 'Add';

    let cancelButton = document.createElement('button');
    cancelButton.id = 'cancelTaskFormButton';
    cancelButton.className = 'cancel-task-form-button';
    cancelButton.innerHTML = 'Cancel';

    form.appendChild(nameInput);
    form.appendChild(dateInput);
    form.appendChild(timeInput);
    form.appendChild(selectColorLabel);
    form.appendChild(colorSelector);
    form.appendChild(detailsInput);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    return form;
}

const drawEditTaskForm = (taskArray , id) => {
    let task = taskArray.find(task => task.id === id)

    let form = document.createElement('form');
    form.id = "editTaskFormContainer";
    form.className = "edit-task-form-container"

    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'taskNameInput'
    nameInput.className = 'task-name-input'
    nameInput.value = task.name;

    // let dateInputLabel = document.createElement('label');
    // dateInputLabel.innerHTML = 'Set date'

    let dateInput = document.createElement('input');
    if (task.date === '-') {
        dateInput.type = 'text';
        dateInput.placeholder = 'Date';
        dateInput.setAttribute('onfocus',`(this.type='date')`)
    } else {
        dateInput.type = 'date';
        dateInput.value = task.date;
    }   
    dateInput.id = 'taskDateInput';
    dateInput.className = 'task-date-input';

    // let timeInputLabel = document.createElement('label');
    // timeInputLabel = "Set time"

    let timeInput = document.createElement('input');
    if (task.time === '-') {
        timeInput.type = 'text';
        timeInput.placeholder = 'Time';
        timeInput.setAttribute('onfocus',`(this.type='time')`)
    } else {
        timeInput.type = 'time';
        timeInput.value = task.time;
    }
    timeInput.id = 'taskTimeInput';
    timeInput.className = 'task-time-input';

    let selectColorLabel = document.createElement('label');
    selectColorLabel.innerHTML = 'Select Color:';
    selectColorLabel.className = 'select-color-label';
    selectColorLabel.id = 'selectColorLabel'
    

    let colorSelector = document.createElement('select');
    colorSelector.id = 'colorSelector';
    colorSelector.className = 'color-selector'
    colorSelector.value = task.color;
    colorSelector.style.background = task.color;

    let colorArray = ['#FFFFFF','#FF9AA2','#FFB7B2','#FFDAC1','#E2F0CB','#B5EAD7', '#C7CEEA']

    for (let i = 0; i < colorArray.length; i++) {
        let option = document.createElement('option');
        option.value = colorArray[i];
        option.id = `color-option-${colorArray[i]}`
        option.className = 'color-option'
        option.style.background = `${colorArray[i]}`;
        colorSelector.appendChild(option);
    }

    let detailsInput = document.createElement('textarea');
    detailsInput.placeholder = "Details";
    detailsInput.id = 'taskDetailsInput';
    detailsInput.className = 'task-details-input';
    detailsInput.value = task.details;

    let saveButton = document.createElement('button');
    saveButton.id = 'saveTaskButton';
    saveButton.className = 'save-task-button';
    saveButton.innerHTML = 'Save';

    let cancelButton = document.createElement('button');
    cancelButton.id = 'cancelEditTaskFormButton';
    cancelButton.className = 'cancel-task-form-button';
    cancelButton.innerHTML = 'Cancel';

    form.appendChild(nameInput);
    form.appendChild(dateInput);
    form.appendChild(timeInput);
    form.appendChild(selectColorLabel);
    form.appendChild(colorSelector);
    form.appendChild(detailsInput);
    form.appendChild(saveButton);
    form.appendChild(cancelButton);

    return form;
}

export {
    drawNewListForm,
    drawEditListForm,
    drawNewTaskForm,
    drawEditTaskForm,
}

//Draw Add New Task or Edit Task Form
//TODO