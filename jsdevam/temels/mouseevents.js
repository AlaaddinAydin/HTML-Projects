const cardbody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

console.log(title);
console.log(cardbody);


// click Event

/* title.addEventListener("click", run); */

//double click

/* title.addEventListener("dbclick", run); */

//mouse down

/* title.addEventListener("mousedown", run); */

//mouse up

/* title.addEventListener("mouseup", run); */

//mouse over her elemente uyarır

/* title.addEventListener("mouseover", run); */

//mouse out

//title.addEventListener("mouseout", run);

/* 
cardbody.addEventListener("mouseover", run);
cardbody.addEventListener("mouseout", run); */

//mouse enter her elementte uyarmaz  and mouse leave

/* cardbody.addEventListener("mouseenter", run);
cardbody.addEventListener("mouseleave", run); */


function run(e) {
    console.log(e.type);
}