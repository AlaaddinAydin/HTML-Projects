//ajaz , callback , http requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    // get request
    get(url, callback) {
        this.xhr.open("GET", url);//bağlantı açıldı

        //const temp = this;

        this.xhr.onload = () => {

            //console.log(this);

            if (this.xhr.status === 200) {
                //console.log(this);
                callback(null, this.xhr.responseText);
            }
            else {
                //hata durumu
                callback("herhangi bir hata oluştu", null);
            }
        };//.bind(this);

        this.xhr.send();

    }

    post(url, data, callback) {
        this.xhr.open("POST", url);

        this.xhr.setRequestHeader("Content-type", "application/json"); //json göndermece

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                //bsaşarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("hata", null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);

        this.xhr.setRequestHeader("Content-type", "application/json"); //json göndermece

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                //bsaşarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("putta hata", null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }

    delete(url, callback) {
        this.xhr.open("DELETE", url);//bağlantı açıldı

        //const temp = this;

        this.xhr.onload = () => {

            //console.log(this);

            if (this.xhr.status === 200) {
                //console.log(this);
                callback(null, "veri başarıylea silindi");
            }
            else {
                //hata durumu
                callback("DELETE hata oluştu", null);
            }
        };//.bind(this);

        this.xhr.send();

    }
}

const request = new Request();

/* request.get("https://jsonplaceholder.typicode.com/posts/3", function (err, response) {

    //console.log(response);
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }

    //console.log(response);

}); */

/* request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "thriller" }, function (err, album) {

    if (err === null) {
        console.log(album);
    }
    else {
        console.log(err);
    }
}); */

/* request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 155, title: "oha naber 123" }, function (err, album) {

    if (err === null) {
        console.log(album);
    }
    else {
        console.log(err);
    }
}); */

request.delete("https://jsonplaceholder.typicode.com/albums/1012312", function (err, response) {

    //console.log(response);
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }

    //console.log(response);

});