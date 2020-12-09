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

export default taskFactory;

