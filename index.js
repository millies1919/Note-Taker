const deleteButton = (elementId) => {
        var deleted = document.getElementById(elementId);
        deleted.parentNode.removeChild(deleted);
}

const saveButton = () => {

}
var counter = 1;
const addButton = () => {
    var newCard = document.getElementById("container-template");
    var cln = newCard.cloneNode(true);
    document.getElementById("body").appendChild(cln);
    counter++;
    cln.id = "container" + counter
}