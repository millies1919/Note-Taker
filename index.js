const deleteButton = () => {

}

const saveButton = () => {

}

const addButton = () => {
    var newCard = document.getElementById("container-template")
    var cln = newCard.cloneNode(true);
    document.getElementById("body").appendChild(cln);
}