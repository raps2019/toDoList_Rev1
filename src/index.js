//Import Factory Functions
import taskFactory from './modules/taskFactory'
import listFactory from './modules/listFactory'

//Import DOM Manipulation Functions
import { initializePage } from './modules/initializePage'
import { drawNewListButton, drawNewTaskButton } from './modules/drawAddNewButtons';
import { drawNewListForm, drawEditListForm } from './modules/drawForms';
import { drawLists } from './modules/drawLists'

console.log('This should work now!')

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

    //Edit List when Edit Button Clicked
    document.addEventListener('click',function(e) {
        if (e.target.id === 'editListButton') {
            let listId = e.target.parentNode.dataset.listId;
            let targetListRow = document.querySelector(`[data-list-id = '${listId}']`);
            targetListRow.innerHTML = ' ';
            targetListRow.appendChild(drawEditListForm(listArray,listId));
            
            // focus on input field
            document.getElementById('editListInput').focus();

            // remove add new list button while edit list active
            document.getElementById('newListButtonContainer').remove();
        }
    })

    document.addEventListener('click', function(e) {
        console.log(e.target)
    })


    












})();