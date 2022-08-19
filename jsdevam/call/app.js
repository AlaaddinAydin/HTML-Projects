/* function getData(data) {
    //promise falan

    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            //resolve("olumlu sonuç");
            //reject("olumsuz sonuç");

            if (typeof data === "string") {
                //olumlu
                resolve(data);
            }
            else {
                //olumsuz
                reject(new Error("lütfen string bir değer gir"));
            }
        }, 5000);
    });
} */

/* console.log(getData("merhaba")); // biz */

/* getData("merhaba").then(function (response) {
    console.log(response);
}); */

/* getData("merhaba").catch(function (err) {
    console.log(err);
}); */

/* getData(31)
    .then((response) => {console.log("gelen değer ", response);})
    .catch((err) => {console.error(err);}); */


function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            }
            else {
                reject(new Error("litfen sayı gir"));
            }
        }, 3000);
    });
}

addTwo("aynen")
    .then((response) => {
        console.log(response);
        return response + 2; // dödüğü değer promise olduğu için ikinci then
    })
    .then((response2) => {
        console.log(response2);
    })
    .catch((err) => console.error(err)); // birden çok catch olmazz !!
