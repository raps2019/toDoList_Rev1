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
    editCategory(newCategory) {
        this.category = newCategory;
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
const taskFactory = (title,details,dueDate,priority,category,active) => {

    let task = Object.create(taskProto);
    let completed = false;  

    task.title = title;
    task.details = details;
    task.dueDate = dueDate;
    task.priority = priority;
    task.category = category;
    task.active = active;
    task.completed = completed;
    task.id = Date.now().toString();
    
    return task;
} 

//Add Task Function (dont think this is need)
// const addTask = (taskList,title,details,dueDate,priority,category) => {
//     taskList.push(taskFactory(title,details,dueDate,priority,category));
// }

export default taskFactory;

