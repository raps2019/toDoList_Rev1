/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskFactory */ "./src/modules/taskFactory.js");
/* harmony import */ var _modules_listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listFactory */ "./src/modules/listFactory.js");
/* harmony import */ var _modules_initializePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initializePage */ "./src/modules/initializePage.js");
/* harmony import */ var _modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/drawAddNewButtons */ "./src/modules/drawAddNewButtons.js");
/* harmony import */ var _modules_drawForms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/drawForms */ "./src/modules/drawForms.js");
/* harmony import */ var _modules_drawLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/drawLists */ "./src/modules/drawLists.js");
/* harmony import */ var _modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/drawTasks */ "./src/modules/drawTasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Import Factory Functions



// Import DOM Manipulation Functions








console.log('This should work now!hahshadkjdasjka!');

const runApp = (() => {
  const body = document.querySelector('body');

  body.appendChild((0,_modules_initializePage__WEBPACK_IMPORTED_MODULE_2__.initializePage)());

  const addListContainer = document.getElementById('addListContainer');
  const addTaskContainer = document.getElementById('addTaskContainer');

  addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
  addTaskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewTaskButton)());

  // Activate New List Form when Add New List Button Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'newListButton') {
      const newListButtonContainer = document.getElementById('newListButtonContainer');
      newListButtonContainer.remove();
      addListContainer.appendChild((0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawNewListForm)());
      // Remove edit and delete button for tasks while new list input active
      // Check if edit and delete is active first
      if (document.getElementById('editListButton')) {
        document.getElementById('editListButton').remove();
        document.getElementById('deleteListButton').remove();
      }
      // Focus on New List Input
      document.getElementById('newListInput').focus();
    }
  });

  // Deactivate New List form when cancel button Clicked and Add New List Button Back
  document.addEventListener('click', (e) => {
    if (e.target.id === 'cancelListFormButton') {
      const newListFormContainer = document.getElementById('newListFormContainer');
      newListFormContainer.remove();
      addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
      const listRowsContainer = document.getElementById('listRowsContainer');
      listRowsContainer.remove();
      listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
    }
  });

  let listArray = [];
  let taskArray = [];

  // Initialize List Array with Default List
  listArray.push((0,_modules_listFactory__WEBPACK_IMPORTED_MODULE_1__.default)('Default', true));
  let listContentContainer = document.getElementById('listContentContainer');
  listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));

  // Add List to Array when Submit List Button Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'submitListButton') {
      const listInput = document.getElementById('newListInput');
      const listName = listInput.value;
      if (listName === '') {
        alert('Enter a name for the list');
        return;
      }
      // Check if list exists
      for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].name.toLowerCase() === listName.toLowerCase()) {
          alert(`${listName} already exists`);
          return;
        }
      }
      for (let i = 0; i < listArray.length; i++) {
        listArray[i].active = false;
      }
      // Push new list to array and clear input text box
      listArray.push((0,_modules_listFactory__WEBPACK_IMPORTED_MODULE_1__.default)(listName, true));
      listInput.value = '';
      document.getElementById('listRowsContainer').remove();
      listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));

      // Remove add form and draw add new list button
      const newListFormContainer = document.getElementById('newListFormContainer');
      newListFormContainer.remove();
      addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());

      // Draw Tasks for Active List
      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));
    }
  });

  // Submit new list when enter pressed
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      if (document.getElementById('newListInput')) {
        document.getElementById('submitListButton').click();
      }
    }
  });

  // Change Active List by Clicking on List Row
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('inactive-list')) {
      const { listId } = e.target.parentNode.dataset;
      for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].id === listId) {
          listArray[i].active = true;
        } else {
          listArray[i].active = false;
        }
      }
      const listRowsContainer = document.getElementById('listRowsContainer');
      listRowsContainer.remove();
      listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));

      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));
    }
  });

  // Delete List when Delete Button Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'deleteListButton') {
      const { listId } = e.target.parentNode.dataset;
      listArray = listArray.filter((list) => list.id != listId);

      // Set last list as active
      if (listArray.length != 0) {
        listArray[listArray.length - 1].active = true;
      }

      const listRowsContainer = document.getElementById('listRowsContainer');
      listRowsContainer.remove();
      listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
    }
  });

  // Activate Edit List input form when Edit Button Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'editListButton') {
      const { listId } = e.target.parentNode.dataset;
      const targetListRow = document.querySelector(`[data-list-id = '${listId}']`);
      targetListRow.innerHTML = ' ';
      (0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawEditListForm)(listArray, listId, targetListRow);
      // targetListRow.appendChild(drawEditListForm(listArray,listId).children[0]);
      // targetListRow.appendChild(drawEditListForm(listArray,listId).children[0]);
      // targetListRow.appendChild(drawEditListForm(listArray,listId).children[0]);

      // focus on input field
      document.getElementById('editListInput').focus();

      // remove add new list button while edit list active
      if (document.getElementById('newListButtonContainer')) {
        document.getElementById('newListButtonContainer').remove();
      }
    }
  });

  // Edit list name when save list button clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'saveListButton') {
      const { listId } = e.target.parentNode.dataset;
      const newListName = document.getElementById('editListInput').value;
      if (newListName === '') {
        alert('Enter a name of the list');
      }
      // Check if name is already used
      const otherLists = listArray.filter((list) => list.id != listId);
      for (let i = 0; i < otherLists.length; i++) {
        if (otherLists[i].name === newListName) {
          alert(`${newListName} already exists`);
          return;
        }
      }

      listArray.find((list) => list.id === listId).editName(newListName);
      console.log(listArray);
      const listRowsContainer = document.getElementById('listRowsContainer');
      listRowsContainer.remove();
      listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
      addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
    }
  });

  // Save input when enter button pressed
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      if (document.getElementById('editListInput')) {
        document.getElementById('saveListButton').click();
      }
    }
  });

  // Deactivate Edit List form when cancel button Clicked and Edit New List Button Back
  document.addEventListener('click', (e) => {
    if (e.target.id === 'cancelEditListFormButton') {
      const listRowsContainer = document.getElementById('listRowsContainer');
      listRowsContainer.remove();
      listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
      // Add Add List Button Back
      addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
    }
  });

  // Open add new task form when Add new task clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'newTaskButton') {
      addTaskContainer.innerHTML = '';

      taskArray.forEach((task) => task.active = false);

      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));

      addTaskContainer.appendChild((0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawNewTaskForm)());
      document.getElementById('taskNameInput').focus();
    }
  });

  // Change task color option selector when color selected
  document.addEventListener('click', (e) => {
    if (e.target.id === 'colorSelector') {
      document.getElementById('colorSelector').style.background = e.target.value;
    }
  });

  // Save task to task array when submit task button clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === ('submitTaskButton')) {
      e.preventDefault();
      // Set other tasks to inactive
      taskArray.map(task => task.active = false);

      // Arguments for taskFactory Function
      const name = document.getElementById('taskNameInput').value;
      let details = document.getElementById('taskDetailsInput').value;
      let date = document.getElementById('taskDateInput').value;
      let time = document.getElementById('taskTimeInput').value;
      const color = document.getElementById('colorSelector').value;
      const list = listArray.find((list) => list.active === true).name;
      const active = true;

      if (name === '') {
        alert('Enter a task name');
        return;
      }

      if (details === '') {
        details = 'No additional details';
      }

      if (date === '') {
        date = '-';
      }

      if (time === '') {
        time = '-';
      }

      if (time != '-' && date === '-') {
        alert('Enter a due date');
        return;
      }

      // Add task to taskArray
      taskArray.push((0,_modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__.default)(name, details, date, time, color, list, active));

      // Draw Tasks for Active List
      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));

      // Remove new task form and draw add new task button
      addTaskContainer.innerHTML = '';

      addTaskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewTaskButton)());
    }
  });

  // Change active task when task row is clicked
  document.addEventListener('click', (e) => {
    if (e.target.className === 'task-row' || e.target.parentNode.className === 'task-row') {
      let id;
      if (e.target.className === 'task-row') {
        id = e.target.dataset.taskId;
      } else {
        id = e.target.parentNode.dataset.taskId;
      }

      // Make all tasks inactive, then set clicked task to active
      taskArray.map((task) => task.active = false);
      taskArray.find((task) => task.id === id).active = true;

      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));
    }
  });

  // Delete task when delete button is clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'deleteTaskButton') {
      const id = e.target.parentNode.dataset.taskId;
      taskArray = taskArray.filter((task) => task.id !== id);

      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));
    }
  });

  // Edit Task When Edit Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'editTaskButton') {
      const activeTasks = taskArray.filter((task) => task.active === true);
      if (activeTasks.length <= 1) {
        document.getElementById('taskRowHeader').remove();
      }

      const id = e.target.parentNode.dataset.taskId;
      const taskRow = document.querySelector(`[data-task-id ='${id}']`);
      taskRow.className = 'edit-task-row-container';
      taskRow.innerHTML = '';

      document.getElementById('newTaskButton').remove();

      taskRow.appendChild((0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawEditTaskForm)(taskArray, id));
    }
  });

  // Remove edit task form when cancel edit task form button clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'cancelEditTaskFormButton') {
      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));

      addTaskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewTaskButton)());
    }
  });

  // Submit new task information when save task button clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'saveTaskButton') {
      e.preventDefault();

      const id = e.target.parentNode.parentNode.dataset.taskId;

      const name = document.getElementById('taskNameInput').value;
      let details = document.getElementById('taskDetailsInput').value;
      let date = document.getElementById('taskDateInput').value;
      let time = document.getElementById('taskTimeInput').value;
      const color = document.getElementById('colorSelector').value;
      // let list = listArray.find(list => list.active === true).name;
      // let active = true;

      if (name === '') {
        alert('Enter a task name');
        return;
      }

      if (details === '') {
        details = 'No additional details';
      }

      if (date === '') {
        date = '-';
      }

      if (time === '') {
        time = '-';
      }

      if (time != '-' && date === '-') {
        alert('Enter a due date');
        return;
      }

      const task = taskArray.find((task) => task.id === id);

      task.editName(name);
      task.editDetails(details);
      task.editDate(date);
      task.editTime(time);
      task.editColor(color);

      const taskContentContainer = document.getElementById('taskContentContainer');
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray, listArray));

      if (document.getElementById('newTaskButton') === null) {
        addTaskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewTaskButton)());
      }
    }
  });
})();


/***/ }),

/***/ "./src/modules/drawAddNewButtons.js":
/*!******************************************!*
  !*** ./src/modules/drawAddNewButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawNewListButton": () => /* binding */ drawNewListButton,
/* harmony export */   "drawNewTaskButton": () => /* binding */ drawNewTaskButton
/* harmony export */ });
const drawNewListButton = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'newListButtonContainer');

  const button = document.createElement('button');
  button.setAttribute('id', 'newListButton');
  button.setAttribute('class', 'new-list-button');
  button.innerHTML = '+ Add New List';

  div.appendChild(button);

  return div;
};

const drawNewTaskButton = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'newTaskButtonContainer');

  const button = document.createElement('button');
  button.setAttribute('id', 'newTaskButton');
  button.setAttribute('class', 'new-task-button');
  button.innerHTML = '+ Add New Task';

  div.appendChild(button);

  return div;
};




/***/ }),

/***/ "./src/modules/drawForms.js":
/*!**********************************!*
  !*** ./src/modules/drawForms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawNewListForm": () => /* binding */ drawNewListForm,
/* harmony export */   "drawEditListForm": () => /* binding */ drawEditListForm,
/* harmony export */   "drawNewTaskForm": () => /* binding */ drawNewTaskForm,
/* harmony export */   "drawEditTaskForm": () => /* binding */ drawEditTaskForm
/* harmony export */ });
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



// Draw Add New Task or Edit Task Form
// TODO


/***/ }),

/***/ "./src/modules/drawLists.js":
/*!**********************************!*
  !*** ./src/modules/drawLists.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawLists": () => /* binding */ drawLists
/* harmony export */ });
const drawLists = (listArray) => {
  const div = document.createElement('div');
  div.id = 'listRowsContainer';

  for (let i = 0; i < listArray.length; i += 1) {
    const listRow = document.createElement('div');
    listRow.dataset.listId = listArray[i].id;
    listRow.className = 'list-row';

    const listNameP = document.createElement('p');
    listNameP.innerHTML = listArray[i].name;
    listNameP.className = 'list-name';
    listNameP.classList.add('inactive-list');

    if (listArray[i].active === true) {
      listNameP.classList.remove('inactive-list');
      listNameP.classList.add('active-list');
    }

    listRow.appendChild(listNameP);

    if (listArray[i].active === true) {
      const editListButton = document.createElement('button');
      editListButton.className = 'edit-list-button';
      editListButton.id = 'editListButton';
      editListButton.innerHTML = 'Edit';
      listRow.append(editListButton);

      const deleteListButton = document.createElement('button');
      deleteListButton.className = 'delete-list-button';
      deleteListButton.id = 'deleteListButton';
      deleteListButton.innerHTML = 'Delete';
      listRow.append(deleteListButton);
    }
    div.appendChild(listRow);
  }

  return div;
};




/***/ }),

/***/ "./src/modules/drawTasks.js":
/*!**********************************!*
  !*** ./src/modules/drawTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawTasks": () => /* binding */ drawTasks
/* harmony export */ });
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

  const activeListTaskArray = taskArray.filter((task) => task.list === activeListName);

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




/***/ }),

/***/ "./src/modules/initializePage.js":
/*!***************************************!*
  !*** ./src/modules/initializePage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializePage": () => /* binding */ initializePage
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/listFactory.js":
/*!************************************!*
  !*** ./src/modules/listFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// list Object

// list Object Prototype
const listProto = {
  editName(newName) {
    this.name = newName;
  },
};

// list Object Factory Function
const listFactory = (name, active) => {
  const list = Object.create(listProto);

  list.name = name;
  list.id = Date.now().toString();
  list.active = active;

  return list;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listFactory);


/***/ }),

/***/ "./src/modules/taskFactory.js":
/*!************************************!*
  !*** ./src/modules/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// Task Object

// Task Object Prototype Functions
const taskProto = {
  editName(newName) {
    this.name = newName;
  },
  editDetails(newDetails) {
    this.details = newDetails;
  },
  editDate(newDate) {
    this.date = newDate;
  },
  editTime(newTime) {
    this.time = newTime;
  },
  editColor(newColor) {
    this.color = newColor;
  },
  editList(newList) {
    this.list = newList;
  },
  editColor(newColor) {
    this.color = newColor;
  },
  toggleStatus() {
    if (this.completed === false) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  },
};

// Task Factory Function
const taskFactory = (name, details, date, time, color, list, active) => {
  const task = Object.create(taskProto);
  const completed = false;

  task.name = name;
  task.details = details;
  task.date = date;
  task.time = time;
  task.color = color;
  task.list = list;
  task.active = active;
  task.completed = completed;
  task.id = Date.now().toString();

  return task;
};

// Add Task Function (dont think this is need)
// const addTask = (taskList,name,details,date,color,list) => {
//     taskList.push(taskFactory(name,details,date,color,list));
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map