// session storage key and value

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");


//

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value); //session kapatınca gidiyor oha 
}
function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}
function clearItem(e) {
    sessionStorage.clear();
}

