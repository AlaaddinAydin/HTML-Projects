// set time out

/* setTimeout(function () {
    console.log("naber");
}, 5000); */


//set interval

let i = 0;
let value = setInterval(function () {
    console.log(i); // aralıkla devam eden bir döngümsü 
    i++;
}, 1000);

document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
})


//clear interval