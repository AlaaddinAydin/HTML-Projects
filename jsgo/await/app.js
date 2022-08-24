/* async function test(data) {
    //mutlaka promise döner
    /* return new Promise((resolve, reject) => {
        resolve(data);
    }); */

//return data;

/* let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("bu bir değereidr")
    }, 5000);
}); */

/* let response = await promise; // async olmayanda çalışmaz

/* console.log(response);
console.log("naber"); */

//return response; */



//console.log(test("merhaba"));

//test("merhaba").then(response => console.log(response));



/* async function testData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data);
            }
            else {
                reject(new Error("lütfen string bir değer gir"));
            }
        }, 5000);
    });

    const response = await promise;

    return response;

}



testData(24)
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

/* async function getCurrency(url) {

    const response = await fetch(url); // response object
    console.log(response);

    const data = await response.json(); // json object

    //console.log(data);


    return data;
}


getCurrency("https://api.exchangeratesapi.io/latest")
    .then(response => console.log(response)); */