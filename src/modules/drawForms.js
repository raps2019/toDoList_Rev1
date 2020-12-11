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
const drawEditListForm = (listArray,id,targetDiv) => {
    let div = document.createElement('div');
    div.id = "editListFormContainer"
    div.className = "edit-list-form-container"

    let input = document.createElement('input');
    let listName = listArray.find(list => list.id === id).name;
    input.placeholder = listName;
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
    
    targetDiv.appendChild(input);
    targetDiv.appendChild(submitButton);
    targetDiv.appendChild(cancelButton);
}

export {
    drawNewListForm,
    drawEditListForm,
}

//Draw Add New Task or Edit Task Form
//TODO