

const onLoad = () => {
    var contain = document.createElement("div");
    var addId = document.createAttribute("id");
    addId.value = "containerdiv"
    contain.setAttributeNode(addId)
    document.getElementById("body").appendChild(contain);
}

const deleteButton = (element) => {
    var deleted = element;
    var parent = deleted.parentNode;
    parent.parentNode.removeChild(parent);
}

const saveButton = (element) => {
    title = document.getElementsByClassName("title2")
    console.log(title)
}

const addButton = () => {
    createNote();
}

const createNote = () => {
    var counter = 0;
    var newCard = document.getElementById("container-template");
    var cln = newCard.cloneNode(true);
    document.getElementById("body").appendChild(cln);
    document.getElementById("containerdiv").appendChild(cln);
    console.log(cln.children)
    
    
    
    var newId = undefined;
    var element = undefined;

    do {
        counter++
        newId = "container" + counter;
        element = document.getElementById(newId);

    } while(element != undefined)
    cln.id = newId
}