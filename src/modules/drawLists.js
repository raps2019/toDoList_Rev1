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

export {
    drawLists
} 