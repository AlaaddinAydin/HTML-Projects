//buble

/* document.querySelector(".container").addEventListener("click", function () {
    console.log("div falan");
});


document.querySelector(".card-row").addEventListener("click", function () {
    console.log("card row");
});


document.querySelectorAll(".card-body")[1].addEventListener("click", function () {
    console.log("card body");
});
 */


//event capturing or delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {

    if (e.target.className === "fa fa-remove") {
        console.log("silme işlemi");
    }
    if (e.target.id === "filter") {
        console.log("filtreleme işlemi");
    }
    if (e.target.id === "clear-todos") {
        console.log("tüm taskları sil");
    }
    //console.log(e.target);
}