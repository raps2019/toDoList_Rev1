//Import Factory Functions
import taskFactory from './modules/taskFactory'
import listFactory from './modules/listFactory'

//Import DOM Manipulation Functions
import { initializePage } from './modules/initializePage'
import { drawNewListButton, drawNewTaskButton } from './modules/drawAddNewButtons';
import { drawNewListForm, drawEditListForm, drawNewTaskForm } from './modules/drawForms';
import { drawLists } from './modules/drawLists'

console.log('This should work now!!!')

const runApp = (() => {

    let body = document.querySelector('body');

    body.appendChild(initializePage());

    let addListContainer = document.getElementById('addListContainer');
    let addTaskContainer = document.getElementById('addTaskContainer');

    addListContainer.appendChild(drawNewListButton());
    addTaskContainer.appendChild(drawNewTaskButton());

    //Activate New List Form when Add New List Button Clicked
    document.addEventListener('click',function(e){
        if(e.target.id === 'newListButton') {
            let newListButtonContainer = document.getElementById('newListButtonContainer')
            newListButtonContainer.remove();
            addListContainer.appendChild(drawNewListForm());
            //Remove edit and delete buttong for tasks while new list input active
            document.getElementById('editListButton').remove();
            document.getElementById('deleteListButton').remove();
            // Focus on New List Input 
            document.getElementById('newListInput').focus();
        }          
    })

    //Deactivate New List form when cancel button Clicked and Add New List Button Back
    document.addEventListener('click', function(e) {
        if(e.target.id === 'cancelListFormButton') {
            let newListFormContainer = document.getElementById('newListFormContainer')
            newListFormContainer.remove();
            addListContainer.appendChild(drawNewListButton());
        }
    })

    let listArray = [];
    let taskArray = [];

    //Initialize List Array with Default List
    listArray.push(listFactory('Default',true));
    listContentContainer.appendChild(drawLists(listArray))

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
            listArray.push(listFactory(listName,true));
            listInput.value = '';
            document.getElementById('listRowsContainer').remove();
            listContentContainer.appendChild(drawLists(listArray));
            let newListFormContainer = document.getElementById('newListFormContainer')
            newListFormContainer.remove();
            addListContainer.appendChild(drawNewListButton());
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
            listContentContainer.appendChild(drawLists(listArray));
        } 
        
    })

    //Delete List when Delete Button Clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'deleteListButton') {
            let listId = e.target.parentNode.dataset.listId;
            listArray = listArray.filter(list => list.id != listId);
            listRowsContainer.remove();
            listContentContainer.appendChild(drawLists(listArray));
        }
    })

    //Activate Edit List input form when Edit Button Clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'editListButton') {
            let listId = e.target.parentNode.dataset.listId;
            let targetListRow = document.querySelector(`[data-list-id = '${listId}']`);
            targetListRow.innerHTML = ' ';
            targetListRow.appendChild(drawEditListForm(listArray,listId));
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
            let listId = e.target.parentNode.parentNode.dataset.listId;
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
            listContentContainer.appendChild(drawLists(listArray));
            addListContainer.appendChild(drawNewListButton());
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
        
        let editListFormContainer = document.getElementById('editListFormContainer')
        editListFormContainer.remove();
        addListContainer.appendChild(drawNewListButton());
        let listRowsContainer = document.getElementById('listRowsContainer')
        listRowsContainer.remove();
        listContentContainer.appendChild(drawLists(listArray));

        }
    })



    //Open add new task form when Add new task clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'newTaskButton') {
            let newTaskButtonContainer = document.getElementById('newTaskButtonContainer')
            newTaskButtonContainer.remove();
            addTaskContainer.appendChild(drawNewTaskForm());
            //Remove edit and delete buttong for tasks while new task input active
            // document.getElementById('editTaskButton').remove(); //To add
            // document.getElementById('deleteTaskButton').remove(); //To add
            // Focus on New Task Input 
            document.getElementById('taskNameInput').focus();
        }
    })

    //Change color option selector when color selected 
    document.addEventListener('click', function(e) {
        if (e.target.id === 'colorSelector') {
            document.getElementById('colorSelector').style.background = e.target.value;
        }
    })
    












})();