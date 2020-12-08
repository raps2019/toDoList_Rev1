//list Object 

//list Object Prototype
const listProto = {
    editTitle(newTitle) {
        this.title = newTitle;
    }
}

//list Object Factory Function
const listFactory = (title,active) => {
    let list = Object.create(listProto);

    list.title = title;
    list.id = Date.now().toString();
    list.active = active;

    return list;
}

//Add list function (Dont think this is needed)
// const addlist = (listList,title,active) => {
//     listList.push(listFactory(title,active));
// }

export default listFactory;

