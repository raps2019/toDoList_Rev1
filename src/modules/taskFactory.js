// Task Object

// Task Object Prototype Functions
const taskProto = {
  editName(newName) {
    this.name = newName;
  },
  editDetails(newDetails) {
    this.details = newDetails;
  },
  editDate(newDate) {
    this.date = newDate;
  },
  editTime(newTime) {
    this.time = newTime;
  },
  editColor(newColor) {
    this.color = newColor;
  },
  editList(newList) {
    this.list = newList;
  },
  editColor(newColor) {
    this.color = newColor;
  },
  toggleStatus() {
    if (this.completed === false) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  },
};

// Task Factory Function
const taskFactory = (name, details, date, time, color, list, active) => {
  const task = Object.create(taskProto);
  const completed = false;

  task.name = name;
  task.details = details;
  task.date = date;
  task.time = time;
  task.color = color;
  task.list = list;
  task.active = active;
  task.completed = completed;
  task.id = Date.now().toString();

  return task;
};

// Add Task Function (dont think this is need)
// const addTask = (taskList,name,details,date,color,list) => {
//     taskList.push(taskFactory(name,details,date,color,list));
// }

export default taskFactory;
