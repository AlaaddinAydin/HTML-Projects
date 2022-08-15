/* 
let value;
console.log(document);

value = document

value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length - 1];


const elements = document.all;
 */
/* console.log(elements);

for (let i = 0; i < elements.length; i++){
    console.log(elements[i]);
} */



/* elements.forEach(function (element) {
    console.log(element);
}); */

/* const collections = Array.from(document.all);

collections.forEach(function (collection)
{
    console.log(collection);
}) */



/* value = document.all;
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;
value = document.URL;
value = document.characterSet; */

value = document;

//sc

value = document.scripts; // kendi yazdığını en sona yerleştir

/* 
value = document.scripts.length;
value = document.scripts[0];
 */
//links

/* value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1];
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;
 */

// forms

/* value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["forms"]; // namesi ile çağırma
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");
value = document.forms[0].method;

 */




console.log(value);


/* let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title"); */

//class a göre

/* 
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header"); */

//etiket tag e göre
/* 
element = document.getElementsByTagName("div");
 */
//query selector css selector tek item seçer

/* element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".lists-group-item");

element = document.querySelector("li");
element = document.querySelector("div");
 */
//query selector all tÜMÜNÜ SEÇER

/* element = document.querySelectorAll(".lists-gropu-item");

element.forEach(function (el) {
    console.log(el);
});
 */

/* const element = document.querySelector("#clear-todos"); */

//özellikler

/* console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href); */


// style element değiştirmece

/* element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginleft = "20px";
element.href = "";//kendin yazabiliyon 
element.target = "_blank"; */

/* console.log(element.textContent);
element.textContent = "silin";
element.innerHTML = "<spna style = color : green> Silin </span>" */


/* const elements = document.querySelectorAll(".list-group-item");

elements.forEach(function (e1) {
    e1.style.color = "red";
    e1.style.background = "#eee";
    e1
}); */

let element2 = document.querySelector("li-last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");
element2.forEach(function (el) {
    el.style.background = "#ccc";
    el.style.color = "red";
});

console.log(element2);

/* console.log(element); */