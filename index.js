
const bigLoad = () => {
    onLoad();
    createNote();
    for (var i = 0; i < localStorage.length; i++){
        var note = localStorage.getItem(window.localStorage.key(i));
        var title = window.localStorage.key(i);
        createNote(title, note);
    }
}

const onLoad = () => {
    var contain = document.createElement("div");
    var addId = document.createAttribute("id");
    addId.value = "containerdiv";
    contain.setAttributeNode(addId);
    document.getElementById("body").appendChild(contain);
}

const deleteButton = (element) => {
    var deleted = element;
    var parent = deleted.parentNode;
    parent.parentNode.removeChild(parent);
    var title = element.parentNode.querySelector(".title").value;
    localStorage.removeItem(title);
    
}

const saveButton = (element) => {
    var title = element.parentNode.querySelector(".title").value;
    var note = element.parentNode.querySelector(".note").value;
    localStorage.setItem(title, note);
}

const addButton = () => {
    createNote();
}

const createNote = (title, note) => {
    var counter = 0;
    var newCard = document.getElementById("container-template");
    var cln = newCard.cloneNode(true);
    document.getElementById("body").appendChild(cln);
    document.getElementById("containerdiv").appendChild(cln);
    
    if(title && note) {
        cln.querySelector(".title").value = title
        cln.querySelector(".note").value = note
    }

    var newId = undefined;
    var element = undefined;

    do {
        counter++
        newId = "container" + counter;
        element = document.getElementById(newId);

    } while(element != undefined)
    cln.id = newId;
}