//Import Factory Functions
import taskFactory from './modules/taskFactory'
import listFactory from './modules/listFactory'

//Import DOM Manipulation Functions
import { drawNewListButton, drawNewTaskButton } from './modules/drawAddNewButtons';
import { drawNewListForm } from './modules/drawForms';

console.log('This should work')

const runApp = (() => {
    const listContainer = document.querySelector('#listContainer');
    const taskContainer = document.querySelector('#taskContainer')

    listContainer.appendChild(drawNewListButton());
    taskContainer.appendChild(drawNewTaskButton());


    //Activate/Deactivate List Form when Add New List or Cancel Button Clicked
    document.addEventListener('click',function(e) {
        if(e.target.id === "newListButton" || e.target.id === "cancelListFormButton") {
            let newListButtonContainer = document.getElementById('newListButtonContainer');
            if(newListButtonContainer.classList.contains('new-list-form-active') === false) {
                listContainer.appendChild(drawNewListForm());
                newListButtonContainer.classList.add('new-list-form-active')
            } else {
                newListButtonContainer.classList.remove('new-list-form-active')
                document.getElementById('newListFormContainer').remove();
            }
        }
    })

    let listArray = [];
    let taskArray = [];

    //Initialize List Array with Default List
    listArray.push(listFactory('Default',true));

    //Add List to Array when Submit List Button Clicked
    document.addEventListener('click',function(e) {
        if(e.target.id === "submitListButton") {
            let listInput = document.getElementById('newListInput')
            let listName = listInput.value;
            //Check if list exists
            for(let i = 0; i < listArray.length; i++) {
                if (listArray[i].name.toLowerCase() === listName.toLowerCase()) {
                    alert(`List ${listName} already exists`);
                    return;
                } 
            }
            for(let i = 0; i < listArray.length; i++) {
                listArray[i].active = false;
            }
            listArray.push(listFactory(listName,true));
            listInput.value = '';
            console.log(listArray)
        }
    })

 












})();