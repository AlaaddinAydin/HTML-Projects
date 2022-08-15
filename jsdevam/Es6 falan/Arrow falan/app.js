/* const merhaba = function () {
    console.log("Merhaba");
}

merhaba(); */

// arrow ke

/* const merhaba = () => {
    console.log("merhaba");
}

merhaba(); */


/* const merhaba = (firstName,lastName) => console.log("merhaba", firstName,lastName);


merhaba("oha naber", "naber"); */

/* const cube = function (x) {
    return x * x * x;
}
console.log(cube(4)); */

/* const cube = x =>  x * x * x;

console.log(cube(4)); */

//arrrow

//destructing


/* let number1, number2;
 */
arr = [100, 200, 300, 400];

/* [number1, number2] = arr;
 */

/* const [number1, number2] = arr; */


/* 
console.log(number1,number2); */

//obje destructing


/* const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

const { a: number1, c: number2, e: number3 } = numbers;

console.log(number1, number2, number3); */


//func destructing
/* 
const getLangs = () => ["python", "java", "c++"];

const [lang1, lang2, lang3] = getLangs();

console.log(lang1,lang2,lang3); */



//obje
/* 
const person = {
    name: "oha naebr",
    yaer: 2004,
    salary: 3000,
    showInfos: () => console.log("bilgiler gösteriliryor")
}

const { name: isim, yaer: yıl, salary: maaş, showInfos: bilgilerigöster } = person

console.log(isim, yıl, maaş);

bilgilerigöster(); */


//spreaddddddd


//const langs = ["falan", "filan", "aynen", "kanka"];

//console.log(langs[0],langs[1],langs[2]);/*  */4


//console.log(...langs);
/* 
const langs2 = ["rann", "hooop",...langs];

console.log() */


/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b,...number2] = numbers;

console.log(a, b);
console.log(number2); */


/* const addnumbers = (a, b, c,) => {
    console.log(a + b + c);
}

const numbers = [100, 200, 300];

addnumbers(...numbers); */


//for in and for offfff


/* const person = {
    name: "kes lan",
    age: 25,
    salary: 3000
};

const langs = ["ayne", "kanka", "falan", "filan"];

const name = "kes";
 */

//for in
//gezinme
/* for (let prop in person) {
    console.log(prop, person[prop]);
} */



/* for (let index in langs) {
    console.log(index,langs[index]);
} */


//string

/* for (let index in name) {
    console.log(index,name[index]);
} */


//for offffff

//objext

/* for (let value of person) {
    console.log(value);
} */


/* for (let value of langs) {
    console.log(value);
} */


//string

/* for (let karakter of name) {
    console.log(karakter);
} */



//maps = key - value


/* let myMap = new Map();//oluşturmaca

console.log(typeof myMap);

const key1 = "aynen";

const key2 = { a: 10, b: 20 };

const key3 = () => 2;
 */

//set
/* myMap.set(key1, "str");
myMap.set(key2, "aynen abab");
myMap.set(key3, "fonksiyoooooon");
 */
//gett

/* console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3)); */

//console.log(myMap);

//map npyutut

//console.log(myMap.size);

/* const cities = new Map();

cities.set("anklara", 5);
cities.set("istanbul", 15);
cities.set("izmir", 4);
 */
//for
/* 
cities.forEach(function (value, key) {
    console.log(key, value);
}) */

//for of

/* for (let [key, value] of cities) {
    console.log(key, value);
} */


//map keys

/* for (let key of cities.keys()) {
    console.log(key);
} */

//map values

/* for (let value of cities.values()) {
    console.log(value);
} */


//arraydan map oluşturmaca
/* const array = [["key1", "value1"], ["key2", "value2"]];

const lastMap = new Map(array);

console.log(lastMap); */

//mapden array oluşturma


const cities = new Map();

cities.set("anklara", 5);
cities.set("istanbul", 15);
cities.set("izmir", 4);

const array = Array.from(cities);
//[[][][]]

console.log(array);