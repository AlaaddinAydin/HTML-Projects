const header = document.querySelector("card-header");
const todoInput = document.querySelector("#todo");



todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    header.textContent = e.taget.value;
    console.log(e.target.value); // değer alma formdan falan
}






//keypress sadece klavey tuşları
/* document.addEventListener("keypress", run);

function run(e) {
    console.log(e.which);
    console.log(e.key);
    console.log("naber");
} */


//keydown bütün klavye tuşları

/* document.addEventListener("keydown", run);

function run(e) {
    console.log(e.which);
    console.log(e.key);
    console.log("naber");
} */


//keyup   tuşu bırakman lazım

/* document.addEventListener("keyup", run);

function run(e) {
    console.log(e.which);
    console.log(e.key);
    console.log("naber");
} */
