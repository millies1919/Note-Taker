var counter = 0;
const deleteButton = (element) => {
        var deleted = element
        var parent = deleted.parentNode;
        parent.parentNode.removeChild(parent);
}

const saveButton = () => {

}
const addButton = () => {
    var newCard = document.getElementById("container-template");
    var cln = newCard.cloneNode(true);
    document.getElementById("body").appendChild(cln);
    counter++;
    cln.id = "container" + counter
}