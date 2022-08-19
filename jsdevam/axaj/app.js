document.getElementById("btn").addEventListener("click", function () {

    //xmlhttpRequest


    const xhr = new XMLHttpRequest();

    /* xhr.onprogress = function () { //ready state 3 olunca çalışır gibi
        console.log("progress falan", this.readyState);
    } */

    xhr.onload = function () { //ready state 4 olunca çalışrmışcasına
        if (this.status === 200) {
            /* console.log(this.responseText, " ", this.readyState); */
            document.getElementById("x").textContent = this.responseText
        }
    }

    /* xhr.onreadystatechange = function () {
        //console.log(this.readyState);
        //console.log(this.status);

        if (this.status == 200 && this.readyState == 4) {
            // response hazır
            console.log(this.responseText);
        }
    } */

    //console.log(xhr);

    xhr.open("GET", "example.txt", true);

    xhr.send();

})