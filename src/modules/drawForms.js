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
const drawEditListForm = (listArray,id) => {
    let div = document.createElement('div');
    div.id = "editListFormContainer"
    div.className = "edit-list-form-container"

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
    
    div.appendChild(input);
    div.appendChild(submitButton);
    div.appendChild(cancelButton);

    return div
}

const drawNewTaskForm = () => {
    let form = document.createElement('form');
    form.id = "newTaskFormContainer";
    form.className = "new-list-form-container"

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
    form.appendChild(colorSelector);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    return form;
}

export {
    drawNewListForm,
    drawEditListForm,
    drawNewTaskForm,
}

//Draw Add New Task or Edit Task Form
//TODO