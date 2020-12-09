//list Object 

//list Object Prototype
const listProto = {
    editName(newName) {
        this.name = newName;
    }
}

//list Object Factory Function
const listFactory = (name,active) => {
    let list = Object.create(listProto);

    list.name = name;
    list.id = Date.now().toString();
    list.active = active;

    return list;
}

export default listFactory;

