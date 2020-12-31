// Import Factory Functions
import taskFactory from './modules/taskFactory';
import listFactory from './modules/listFactory';

// Import DOM Manipulation Functions
import { initializePage } from './modules/initializePage';
import {
  drawNewListButton,
  drawNewTaskButton,
} from './modules/drawAddNewButtons';
import {
  drawNewListForm,
  drawEditListForm,
  drawNewTaskForm,
  drawEditTaskForm,
} from './modules/drawForms';
import { drawLists } from './modules/drawLists';
import { drawTasks } from './modules/drawTasks';

import './style.css';

console.log('This should work now!hahshadkjdasjka!');

const runApp = (() => {
  const body = document.querySelector('body');

  body.appendChild(initializePage());

  const addListContainer = document.getElementById('addListContainer');
  const addTaskContainer = document.getElementById('addTaskContainer');

  addListContainer.appendChild(drawNewListButton());
  addTaskContainer.appendChild(drawNewTaskButton());

  // Activate New List Form when Add New List Button Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'newListButton') {
      const newListButtonContainer = document.getElementById(
        'newListButtonContainer'
      );
      newListButtonContainer.remove();
      addListContainer.appendChild(drawNewListForm());
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
      const newListFormContainer = document.getElementById(
        'newListFormContainer'
      );
      newListFormContainer.remove();
      addListContainer.appendChild(drawNewListButton());
      const listRowsContainer = document.getElementById('listRowsContainer');
      listRowsContainer.remove();
      listContentContainer.appendChild(drawLists(listArray));
    }
  });

  let listArray = [];
  let taskArray = [];

  // Initialize List Array with Default List
  listArray.push(listFactory('Default', true));
  let listContentContainer = document.getElementById('listContentContainer');
  listContentContainer.appendChild(drawLists(listArray));

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
      listArray.push(listFactory(listName, true));
      listInput.value = '';
      document.getElementById('listRowsContainer').remove();
      listContentContainer.appendChild(drawLists(listArray));

      // Remove add form and draw add new list button
      const newListFormContainer = document.getElementById(
        'newListFormContainer'
      );
      newListFormContainer.remove();
      addListContainer.appendChild(drawNewListButton());

      // Draw Tasks for Active List
      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));
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
      listContentContainer.appendChild(drawLists(listArray));

      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));
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
      listContentContainer.appendChild(drawLists(listArray));
    }
  });

  // Activate Edit List input form when Edit Button Clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'editListButton') {
      const { listId } = e.target.parentNode.dataset;
      const targetListRow = document.querySelector(
        `[data-list-id = '${listId}']`
      );
      targetListRow.innerHTML = ' ';
      drawEditListForm(listArray, listId, targetListRow);
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
      listContentContainer.appendChild(drawLists(listArray));
      addListContainer.appendChild(drawNewListButton());
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
      listContentContainer.appendChild(drawLists(listArray));
      // Add Add List Button Back
      addListContainer.appendChild(drawNewListButton());
    }
  });

  // Open add new task form when Add new task clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'newTaskButton') {
      addTaskContainer.innerHTML = '';

      taskArray.forEach((task) => (task.active = false));

      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));

      addTaskContainer.appendChild(drawNewTaskForm());
      document.getElementById('taskNameInput').focus();
    }
  });

  // Change task color option selector when color selected
  document.addEventListener('click', (e) => {
    if (e.target.id === 'colorSelector') {
      document.getElementById('colorSelector').style.background =
        e.target.value;
    }
  });

  // Save task to task array when submit task button clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'submitTaskButton') {
      e.preventDefault();
      // Set other tasks to inactive
      taskArray.map((task) => (task.active = false));

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
      taskArray.push(
        taskFactory(name, details, date, time, color, list, active)
      );

      // Draw Tasks for Active List
      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));

      // Remove new task form and draw add new task button
      addTaskContainer.innerHTML = '';

      addTaskContainer.appendChild(drawNewTaskButton());
    }
  });

  // Change active task when task row is clicked
  document.addEventListener('click', (e) => {
    if (
      e.target.className === 'task-row' ||
      e.target.parentNode.className === 'task-row'
    ) {
      let id;
      if (e.target.className === 'task-row') {
        id = e.target.dataset.taskId;
      } else {
        id = e.target.parentNode.dataset.taskId;
      }

      // Make all tasks inactive, then set clicked task to active
      taskArray.map((task) => (task.active = false));
      taskArray.find((task) => task.id === id).active = true;

      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));
    }
  });

  // Delete task when delete button is clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'deleteTaskButton') {
      const id = e.target.parentNode.dataset.taskId;
      taskArray = taskArray.filter((task) => task.id !== id);

      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));
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

      taskRow.appendChild(drawEditTaskForm(taskArray, id));
    }
  });

  // Remove edit task form when cancel edit task form button clicked
  document.addEventListener('click', (e) => {
    if (e.target.id === 'cancelEditTaskFormButton') {
      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));

      addTaskContainer.appendChild(drawNewTaskButton());
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

      const taskContentContainer = document.getElementById(
        'taskContentContainer'
      );
      taskContentContainer.innerHTML = '';
      taskContentContainer.appendChild(drawTasks(taskArray, listArray));

      if (document.getElementById('newTaskButton') === null) {
        addTaskContainer.appendChild(drawNewTaskButton());
      }
    }
  });
})();
