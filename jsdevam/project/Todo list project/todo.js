
//element seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondCardbody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners() {
    //tüm eventleri atamaca
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardbody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos(e) {
    
    if (confirm("tümünü silmek istediğinden emin misin?")) {
        //arayüzden kaldırma
        //todoList.innerHTML = ""; // yavaş ama kolay

        while (todoList.firstElementChild != null){ // daha hızlı
            todoList.removeChild(todoList.firstElementChild);
        }
        
        localStorage.removeItem("todos");
    }
    

}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();

        if (text.indexOf(filterValue) === -1) {
            //bulamadığında
            listItem.setAttribute("style", "display : none !important");
        }
        else {
            listItem.setAttribute("style", "display : block");
        }
    });
}

function deleteTodo(e) {
    if (e.target.className === "fa fa_remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "todo başarı ile silindi");
    }
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1); // arraydan değer silme
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "lütfen bir todo girin");
    }
    else {
        addTodoToStorage(newTodo);
        addTodoToUI(newTodo);
        showAlert("succes", "Todo eklendi");
    }


    e.preventDefault();
}
function getTodosFromStorage(newTodo) { // storagedan bütün todoları çek
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("item"));
    }
    return todos;

}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardbody.appendChild(alert);

    //set timeout
    setTimeout(function () {
        alert.remove();
    }, 5000);
}

function addTodoToUI(newTodo) { // stryi list item olarak ekleyecek
    //list item oluşturma
    const listItem = document.createElement("li");
    //link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa - remove'></i>";

    //text node ekleme
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todo list e ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}

