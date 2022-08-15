const filterinput = document.getElementById("filter");
const todoform = document.getElementById("todo-form");


todoform.addEventListener("submit", submitForm);

function submitForm(e) {
    console.log("submit Eventi");



    e.preventDefault();
}


 /* filterinput.addEventListener("focus", function (e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);

     console.log("naber"); 
});  */

/* filterinput.onfocus = function () {
    console.log("naber");
}
 */

console.log(filterinput);