// Draw Add New List Form
const drawNewListForm = () => {
  const div = document.createElement('div');
  div.id = 'newListFormContainer';
  div.className = 'new-list-form-container';

  const input = document.createElement('input');
  input.placeholder = 'Enter List Name';
  input.id = 'newListInput';
  input.className = 'new-list-input';

  const submitButton = document.createElement('button');
  submitButton.id = 'submitListButton';
  submitButton.className = 'submit-list-button';
  submitButton.innerHTML = 'Add';

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancelListFormButton';
  cancelButton.className = 'cancel-list-form-button';
  cancelButton.innerHTML = 'Cancel';

  div.appendChild(input);
  div.appendChild(submitButton);
  div.appendChild(cancelButton);

  return div;
};

// Draw Edit List Form
const drawEditListForm = (listArray, id, target) => {
  const input = document.createElement('input');
  const listName = listArray.find((list) => list.id === id).name;
  input.value = listName;
  input.id = 'editListInput';
  input.className = 'edit-list-input';

  const submitButton = document.createElement('button');
  submitButton.id = 'saveListButton';
  submitButton.className = 'save-list-button';
  submitButton.innerHTML = 'Save';

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancelEditListFormButton';
  cancelButton.className = 'cancel-edit-list-form-button';
  cancelButton.innerHTML = 'Cancel';

  target.appendChild(input);
  target.appendChild(submitButton);
  target.appendChild(cancelButton);
};

const drawNewTaskForm = () => {
  const form = document.createElement('form');
  form.id = 'newTaskFormContainer';
  form.className = 'new-task-form-container';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'taskNameInput';
  nameInput.className = 'task-name-input';
  nameInput.placeholder = 'Task Name';

  // let dateInputLabel = document.createElement('label');
  // dateInputLabel.innerHTML = 'Set date'

  const dateInput = document.createElement('input');
  dateInput.type = 'text';
  dateInput.placeholder = 'Date';
  dateInput.setAttribute('onfocus', '(this.type=\'date\')');
  dateInput.id = 'taskDateInput';
  dateInput.className = 'task-date-input';

  // let timeInputLabel = document.createElement('label');
  // timeInputLabel = "Set time"

  const timeInput = document.createElement('input');
  timeInput.type = 'text';
  timeInput.placeholder = 'Time';
  timeInput.setAttribute('onfocus', '(this.type=\'time\')');
  timeInput.id = 'taskTimeInput';
  timeInput.className = 'task-time-input';

  const selectColorLabel = document.createElement('label');
  selectColorLabel.innerHTML = 'Select Color:';
  selectColorLabel.className = 'select-color-label';
  selectColorLabel.id = 'selectColorLabel';

  const colorSelector = document.createElement('select');
  colorSelector.id = 'colorSelector';
  colorSelector.className = 'color-selector';

  const colorArray = ['#FFFFFF', '#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];

  for (let i = 0; i < colorArray.length; i += 1) {
    const option = document.createElement('option');
    option.value = colorArray[i];
    option.id = `color-option-${colorArray[i]}`;
    option.className = 'color-option';
    option.style.background = `${colorArray[i]}`;
    colorSelector.appendChild(option);
  }

  const detailsInput = document.createElement('textarea');
  detailsInput.placeholder = 'Details';
  detailsInput.id = 'taskDetailsInput';
  detailsInput.className = 'task-details-input';

  const submitButton = document.createElement('button');
  submitButton.id = 'submitTaskButton';
  submitButton.className = 'submit-task-button';
  submitButton.innerHTML = 'Add';

  const cancelButton = document.createElement('button');
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
};

const drawEditTaskForm = (taskArray, id) => {
  const task = taskArray.find((task) => task.id === id);

  const form = document.createElement('form');
  form.id = 'editTaskFormContainer';
  form.className = 'edit-task-form-container';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'taskNameInput';
  nameInput.className = 'task-name-input';
  nameInput.value = task.name;
  nameInput.style.background = task.color;

  // let dateInputLabel = document.createElement('label');
  // dateInputLabel.innerHTML = 'Set date'

  const dateInput = document.createElement('input');
  if (task.date === '-') {
    dateInput.type = 'text';
    dateInput.placeholder = 'Date';
    dateInput.setAttribute('onfocus', '(this.type=\'date\')');
  } else {
    dateInput.type = 'date';
    dateInput.value = task.date;
  }
  dateInput.id = 'taskDateInput';
  dateInput.className = 'task-date-input';
  dateInput.style.background = task.color;

  // let timeInputLabel = document.createElement('label');
  // timeInputLabel = "Set time"

  const timeInput = document.createElement('input');
  if (task.time === '-') {
    timeInput.type = 'text';
    timeInput.placeholder = 'Time';
    timeInput.setAttribute('onfocus', '(this.type=\'time\')');
  } else {
    timeInput.type = 'time';
    timeInput.value = task.time;
  }
  timeInput.id = 'taskTimeInput';
  timeInput.className = 'task-time-input';
  timeInput.style.background = task.color;

  const selectColorLabel = document.createElement('label');
  selectColorLabel.innerHTML = 'Select Color:';
  selectColorLabel.className = 'select-color-label';
  selectColorLabel.id = 'selectColorLabel';

  const colorSelector = document.createElement('select');
  colorSelector.id = 'colorSelector';
  colorSelector.className = 'color-selector';
  colorSelector.style.background = task.color;

  const colorArray = ['#FFFFFF', '#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];

  for (let i = 0; i < colorArray.length; i += 1) {
    const option = document.createElement('option');
    option.value = colorArray[i];
    option.id = `color-option-${colorArray[i]}`;
    option.className = 'color-option';
    option.style.background = `${colorArray[i]}`;
    if (colorArray[i] === task.color) {
      option.selected = true;
    }
    colorSelector.appendChild(option);
  }

  const detailsInput = document.createElement('textarea');
  detailsInput.placeholder = 'Details';
  detailsInput.id = 'taskDetailsInput';
  detailsInput.className = 'task-details-input';
  detailsInput.value = task.details;
  detailsInput.style.background = task.color;

  const saveButton = document.createElement('button');
  saveButton.id = 'saveTaskButton';
  saveButton.className = 'save-task-button';
  saveButton.innerHTML = 'Save';

  const cancelButton = document.createElement('button');
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
};

export {
  drawNewListForm,
  drawEditListForm,
  drawNewTaskForm,
  drawEditTaskForm,
};

// Draw Add New Task or Edit Task Form
// TODO
