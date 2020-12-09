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

export {
    drawNewListButton,
    drawNewTaskButton,
}
