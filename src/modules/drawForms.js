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

export {
    drawNewListForm,
}