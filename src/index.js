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

    document.addEventListener('click',function(e) {
        if(e.target.id === "newListButton" || e.target.id === "cancelListFormButton") {
            if(e.target.parentNode.classList.contains('new-list-form-active') === false) {
                listContainer.appendChild(drawNewListForm());
                e.target.parentNode.classList.add('new-list-form-active')
            } else {
                e.target.parentNode.classList.remove('new-list-form-active')
                console.log(e.target.parentNode.parentNode)
                document.getElementById('newListFormContainer').remove();
            }
        }
    })
})();