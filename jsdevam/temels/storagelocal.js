// local storage

// setITem

/* localStorage.setItem("kareket", "burpee");
localStorage.setItem("tekrar", 50); */


//get item

/* const value = localStorage.getItem("tekrar");

console.log(value);
console.log(typeof value); */



//clear
/* localStorage.clear();

localStorage.setItem("kareket", "burpee");
localStorage.setItem("tekrar", 50); */

/* console.log(localStorage.getItem("sport")); */

/* if (localStorage.getItem("sport") === null) {
    console.log("sorgu bulunamıyor");
}
else {
    console.log("bulunuyor");
} */

//array local storage

const todos = ["todo 1", "todo 2", "todo 3"];

/* localStorage.setItem("todos", todos); */


/* console.log(typeof localStorage.getItem("todos")); */

/* localStorage.setItem("todos", JSON.stringify(todos)); *///json arrey gibi yazmasını sağlar

/* const value = JSON.parse(localStorage.getItem("todos"));
console.log(value); */


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addtodo);

function addtodo(e) {

    const value = todoInput.value;
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));


    e.preventDefault();
}