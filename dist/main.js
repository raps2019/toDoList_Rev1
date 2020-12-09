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
/* harmony import */ var _modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/drawAddNewButtons */ "./src/modules/drawAddNewButtons.js");
/* harmony import */ var _modules_drawForms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/drawForms */ "./src/modules/drawForms.js");
//Import Factory Functions



//Import DOM Manipulation Functions



console.log('This should work')

const runApp = (() => {
    const listContainer = document.querySelector('#listContainer');
    const taskContainer = document.querySelector('#taskContainer')

    listContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_2__.drawNewListButton)());
    taskContainer.appendChild((0,_modules_drawAddNewButtons__WEBPACK_IMPORTED_MODULE_2__.drawNewTaskButton)());

    document.addEventListener('click',function(e) {
        if(e.target.id === "newListButton" || e.target.id === "cancelListFormButton") {
            if(e.target.parentNode.classList.contains('new-list-form-active') === false) {
                listContainer.appendChild((0,_modules_drawForms__WEBPACK_IMPORTED_MODULE_3__.drawNewListForm)());
                e.target.parentNode.classList.add('new-list-form-active')
            } else {
                e.target.parentNode.classList.remove('new-list-form-active')
                console.log(e.target.parentNode.parentNode)
                document.getElementById('newListFormContainer').remove();
            }
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
/* harmony export */   "drawNewListForm": () => /* binding */ drawNewListForm
/* harmony export */ });
const drawNewListForm = () => {
    let div = document.createElement('div');
    div.id = "newListFormContainer"

    let input = document.createElement('input');
    input.placeholder = 'Enter List Name';
    input.name = 'listName';
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
    editTitle(newTitle) {
        this.title = newTitle;
    }
}

//list Object Factory Function
const listFactory = (title,active) => {
    let list = Object.create(listProto);

    list.title = title;
    list.id = Date.now().toString();
    list.active = active;

    return list;
}

//Add list function (Dont think this is needed)
// const addlist = (listList,title,active) => {
//     listList.push(listFactory(title,active));
// }

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
    editTitle(newTitle) {
        this.title = newTitle;
    },
    editDetails(newDetails) {
        this.details = newDetails;
    },
    editDueDate(newDueDate) {
        this.dueDate = newDueDate;
    },
    editPriority(newPriority) {
        this.priority = newPriority;
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
const taskFactory = (title,details,dueDate,priority,list,active) => {

    let task = Object.create(taskProto);
    let completed = false;  

    task.title = title;
    task.details = details;
    task.dueDate = dueDate;
    task.priority = priority;
    task.list = list;
    task.active = active;
    task.completed = completed;
    task.id = Date.now().toString();
    
    return task;
} 

//Add Task Function (dont think this is need)
// const addTask = (taskList,title,details,dueDate,priority,list) => {
//     taskList.push(taskFactory(title,details,dueDate,priority,list));
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