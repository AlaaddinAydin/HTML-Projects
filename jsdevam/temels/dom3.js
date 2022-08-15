// dinamik element

const newLink = document.createAttribute("a");


const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "";//url gir;
newLink.target = "_blank";



//cardbody.textContent = "asdasdsa";


//text node

/* const text = document.createTextNode("naber");


cardbody.appendChild(text);

console.log(cardbody);

console.log(newLink); */



newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
cardbody.appendChild(newLink);