/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//Import Factory Functions



//Import DOM Manipulation Functions






console.log('This should work now!!!')

const runApp = (() => {

    let body = document.querySelector('body');

    body.appendChild((0,_modules_initializePage__WEBPACK_IMPORTED_MODULE_2__.initializePage)());

    let addListContainer = document.getElementById('addListContainer');
    let addTaskContainer = document.getElementById('addTaskContainer');

    addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
    addTaskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewTaskButton)());

    //Activate New List Form when Add New List Button Clicked
    document.addEventListener('click',function(e){
        if(e.target.id === 'newListButton') {
            let newListButtonContainer = document.getElementById('newListButtonContainer')
            newListButtonContainer.remove();
            addListContainer.appendChild((0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawNewListForm)());
            //Remove edit and delete button for tasks while new list input active
            //Check if edit and delete is active first
            if (document.getElementById('editListButton')) {
                document.getElementById('editListButton').remove();
                document.getElementById('deleteListButton').remove();
            }
            // Focus on New List Input 
            document.getElementById('newListInput').focus();
        }          
    })

    //Deactivate New List form when cancel button Clicked and Add New List Button Back
    document.addEventListener('click', function(e) {
        if(e.target.id === 'cancelListFormButton') {
            let newListFormContainer = document.getElementById('newListFormContainer')
            newListFormContainer.remove();
            addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
            let listRowsContainer = document.getElementById('listRowsContainer');
            listRowsContainer.remove();
            listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
        }
    })

    let listArray = [];
    let taskArray = [];

    //Initialize List Array with Default List
    listArray.push((0,_modules_listFactory__WEBPACK_IMPORTED_MODULE_1__.default)('Default',true));
    let listContentContainer = document.getElementById('listContentContainer');
    listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray))

    //Add List to Array when Submit List Button Clicked
    document.addEventListener('click',function(e) {
        if(e.target.id === "submitListButton") {
            let listInput = document.getElementById('newListInput')
            let listName = listInput.value;
            if (listName === '') {
                alert('Enter a name for the list');
                return;
            }
            //Check if list exists
            for(let i = 0; i < listArray.length; i++) {
                if (listArray[i].name.toLowerCase() === listName.toLowerCase()) {
                    alert(`${listName} already exists`);
                    return;
                } 
            }
            for(let i = 0; i < listArray.length; i++) {
                listArray[i].active = false;
            }
            //Push new list to array and clear input text box
            listArray.push((0,_modules_listFactory__WEBPACK_IMPORTED_MODULE_1__.default)(listName,true));
            listInput.value = '';
            document.getElementById('listRowsContainer').remove();
            listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));

            //Remove add form and draw add new list button
            let newListFormContainer = document.getElementById('newListFormContainer')
            newListFormContainer.remove();
            addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());

            //Draw Tasks for Active List
            let taskContentContainer = document.getElementById('taskContentContainer');
            taskContentContainer.innerHTML = '';
            taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray,listArray));
        }
    })

    //Submit new list when enter pressed
    document.addEventListener('keyup', function(e) {
        if(e.key != 'Enter') {
            return;
        } else {
            if(document.getElementById('newListInput')) {
                document.getElementById('submitListButton').click();
            }
        }
    })

    //Change Active List by Clicking on List Row
    document.addEventListener('click',function(e) {
        if(e.target.classList.contains('inactive-list')) {
            let listId = e.target.parentNode.dataset.listId;
            for (let i = 0; i < listArray.length; i++) {
                if (listArray[i].id === listId) {
                    listArray[i].active = true;
                } else {
                    listArray[i].active = false;
                }
            }
            let listRowsContainer = document.getElementById('listRowsContainer');
            listRowsContainer.remove();
            listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));

            let taskContentContainer = document.getElementById('taskContentContainer');
            taskContentContainer.innerHTML = '';
            taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray,listArray));
        } 
    })

    //Delete List when Delete Button Clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'deleteListButton') {
            let listId = e.target.parentNode.dataset.listId;
            listArray = listArray.filter(list => list.id != listId);

            //Set last list as active
            if (listArray.length != 0) {
                listArray[listArray.length -1].active = true;
            }

            let listRowsContainer = document.getElementById('listRowsContainer');
            listRowsContainer.remove();
            listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
        }
    })

    //Activate Edit List input form when Edit Button Clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'editListButton') {
            let listId = e.target.parentNode.dataset.listId;
            let targetListRow = document.querySelector(`[data-list-id = '${listId}']`);
            targetListRow.innerHTML = ' ';
            (0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawEditListForm)(listArray,listId,targetListRow);
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
    })

    //Edit list name when save list button clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'saveListButton') {
            let listId = e.target.parentNode.dataset.listId;
            console.log(listId);
            let newListName = document.getElementById('editListInput').value;
            if (newListName === '') {
                alert('Enter a name of the list');
            }
            //Check if name is already used
            let otherLists = listArray.filter(list => list.id != listId);
            for (let i = 0; i < otherLists.length; i++) {
                if (otherLists[i].name === newListName) {
                    alert(`${newListName} already exists`);
                    return;
                }
            }

            listArray.find(list => list.id === listId).editName(newListName)
            console.log(listArray);
            let listRowsContainer = document.getElementById('listRowsContainer')
            listRowsContainer.remove();
            listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
            addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
            return;
        }
    });

    //Save input when enter button pressed
    document.addEventListener('keyup', function(e) {
        if(e.key != 'Enter') {
            return;
        } else {
            if(document.getElementById('editListInput')) {
                document.getElementById('saveListButton').click();
            }
        }
    })

    //Deactivate Edit List form when cancel button Clicked and Edit New List Button Back
    document.addEventListener('click', function(e) {
    if(e.target.id === 'cancelEditListFormButton') {
        
        let listRowsContainer = document.getElementById('listRowsContainer')
        listRowsContainer.remove();
        listContentContainer.appendChild((0,_modules_drawLists__WEBPACK_IMPORTED_MODULE_5__.drawLists)(listArray));
        //Add Add List Button Back
        addListContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewListButton)());
        }
    })



    //Open add new task form when Add new task clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'newTaskButton') {
            let newTaskButtonContainer = document.getElementById('newTaskButtonContainer')
            newTaskButtonContainer.remove();
            addTaskContainer.appendChild((0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_4__.drawNewTaskForm)());
            //Remove edit and delete buttong for tasks while new task input active
            // document.getElementById('editTaskButton').remove(); //To add
            // document.getElementById('deleteTaskButton').remove(); //To add
            // Focus on New Task Input 
            document.getElementById('taskNameInput').focus();
        }
    })

    //Change task color option selector when color selected 
    document.addEventListener('click', function(e) {
        if (e.target.id === 'colorSelector') {
            document.getElementById('colorSelector').style.background = e.target.value;
        }
    })

    //Save task to task array when submit task button clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === ('submitTaskButton')) {
            e.preventDefault();
            //Set other tasks to inactive
            taskArray.map(task => task.active = false);

            //Arguments for taskFactory Function
            let name = document.getElementById('taskNameInput').value;
            let details = document.getElementById('taskDetailsInput').value;
            let date = document.getElementById('taskDateInput').value;
            let time = document.getElementById('taskTimeInput').value;
            let color = document.getElementById('colorSelector').value
            let list = listArray.find(list => list.active === true).name;
            let active = true;

            //Add task to taskArray
            taskArray.push((0,_modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__.default)(name,details,date,time,color,list,active));
            console.log(taskArray);
            console.log(listArray)

            //Draw Tasks for Active List
            let taskContentContainer = document.getElementById('taskContentContainer');
            taskContentContainer.innerHTML = '';
            taskContentContainer.appendChild((0,_modules_drawTasks__WEBPACK_IMPORTED_MODULE_6__.drawTasks)(taskArray,listArray));

            //Remove new task form and draw add new task button
            let addTaskContainer = document.getElementById('addTaskContainer');
            addTaskContainer.innerHTML = '';

            addTaskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_3__.drawNewTaskButton)());
        }
    })
    












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
    let div = document.createElement('div');
    div.setAttribute('id','newListButtonContainer');

    let button = document.createElement('button');
    button.setAttribute('id','newListButton');
    button.setAttribute('class','new-list-button');
    button.innerHTML = '+ Add New List'

    div.appendChild(button);

    return div;
}

const drawNewTaskButton = () => {
    let div = document.createElement('div');
    div.setAttribute('id','newTaskButtonContainer');

    let button = document.createElement('button');
    button.setAttribute('id','newTaskButton');
    button.setAttribute('class','new-task-button');
    button.innerHTML = '+ Add New Task'

    div.appendChild(button);

    return div;
}




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
/* harmony export */   "drawNewTaskForm": () => /* binding */ drawNewTaskForm
/* harmony export */ });
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



//Draw Add New Task or Edit Task Form
//TODO

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
    let div = document.createElement('div');
    div.id = "listRowsContainer"

    for (let i = 0; i < listArray.length; i++) {
        let listRow = document.createElement('div');
        listRow.dataset.listId = listArray[i].id;
        listRow.className = 'list-row'

        let listNameP = document.createElement('p');
        listNameP.innerHTML = listArray[i].name;
        listNameP.className = 'list-name'
        listNameP.classList.add('inactive-list')

        if (listArray[i].active === true) {
            listNameP.classList.remove('inactive-list');
            listNameP.classList.add('active-list');
        }
        
        listRow.appendChild(listNameP);

        if (listArray[i].active === true){
            let editListButton = document.createElement('button');
            editListButton.className = 'edit-list-button';
            editListButton.id = 'editListButton'
            editListButton.innerHTML = 'Edit'
            listRow.append(editListButton);

            let deleteListButton = document.createElement('button');
            deleteListButton.className = 'delete-list-button';
            deleteListButton.id = 'deleteListButton'
            deleteListButton.innerHTML = 'Delete'
            listRow.append(deleteListButton);
        }
        div.appendChild(listRow);
    }
    
    return div;
}

 

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
const drawTasks = (taskArray,listArray) => {
    let div = document.createElement('div');
    div.id = "taskRowsContainer";
    div.className = 'task-rows-container';

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
//list Object 

//list Object Prototype
const listProto = {
    editName(newName) {
        this.name = newName;
    }
}

//list Object Factory Function
const listFactory = (name,active) => {
    let list = Object.create(listProto);

    list.name = name;
    list.id = Date.now().toString();
    list.active = active;

    return list;
}

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
//Task Object

//Task Object Prototype Functions
const taskProto = {
    editName(newName) {
        this.name = newName;
    },
    editDetails(newDetails) {
        this.details = newDetails;
    },
    editDueDate(newDueDate) {
        this.dueDate = newDueDate;
    },
    editColor(newColor) {
        this.color = newColor;
    },
    editList(newList) {
        this.list = newList;
    },
    toggleStatus() {
        if (this.completed === false) {
            this.completed = true;
        } else {
            this.completed = false
        }
    },
}

//Task Factory Function
const taskFactory = (name,details,date,time,color,list,active) => {

    let task = Object.create(taskProto);
    let completed = false;  

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
} 

//Add Task Function (dont think this is need)
// const addTask = (taskList,name,details,dueDate,color,list) => {
//     taskList.push(taskFactory(name,details,dueDate,color,list));
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