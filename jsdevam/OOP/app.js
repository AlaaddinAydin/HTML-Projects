// OOOP

/* console.log(this); //global scope daki en temel obje windowdur

const emp1 = {
    name: "Mustafa",
    age: 25,
    showinfos: function () { console.log("bilgiler gösterriliyor"); }
}

const emp2 = {
    name: "ahmet",
    age: 25
}

emp1.salary = 4000
emp1.showinfos();

console.log(emp1);
 */

/* function Employee() { // constructor
    this.name = "mustafa";
} */

/* function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showinfos = function () {
        console.log(this.name, this.age, this.salary);
    }

    //console.log(this)
}


const emp1 = new Employee("mustafa", 25, 4000);
const emp2 = new Employee("ahmet", 23, 6000);


emp1.showinfos();
emp2.showinfos(); */

/* console.log(emp1);
console.log(emp2); */

//const emp1 = new Employee(); // Employee türünde bir obje oluşturmaca


/* const emp1 = new Employee();
const emp2 = new Employee();

console.log(emp1);
console.log(emp2); */



//prototype

/* const object = new Object();
const object2 = new Object();


object.name = "mustafa";

console.log(object);
console.log(object2); */

/* function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showinfos = function () {
        console.log("bilgiler gösteriliyor");
    }
    this.toString = function () {
        console.log("bu bizmkinin içinde");
    }
}

const emp1 = new Employee("mustafa", 25);
console.log(emp1);

console.log(emp1.toString()); */

//prototype part 2

/* function Employee(name, age) {

    this.name = name;
    this.age = age;

    /* this.showinfos = function () {
        console.log(this.isim, this.age);
    }
}
* /

/* Employee.prototype.showinfos = function () {
    console.log(this.name, this.age);
}

const emp1 = new Employee("ahmet", 2);
const emp2 = new Employee("owye", 5);

emp2.showinfos();
emp1.showinfos();

console.log(emp1);
console.log(emp2); */

//create objet falan mış

/* const obj = {

    test1: function () {
        console.log("test 1");
    },

    test2: function () {
        console.log("test 2");
    }
}

//console.log(obj);

const emp = Object.create(obj);
emp.name = "mustafa";
emp.age = 25


console.log(emp); */

/* function Person() {

}
Person.prototype.test1 = function () {
    console.log("test 1");
}

Person.prototype.test2 = function () {
    console.log("test 2");
}

/* const person = new Person();

console.log(person); */

/* function Employee(name, age) {
    this.name = name;
    this.age = age
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function () {
    console.log("Mytest");
}


const emp = new Employee("mustafa", 25);

console.log(emp);
 */
//emp.test1();

//call apply bind


/* const obj1 = {
    number1: 10,
    number2: 20
};

const obj2 = {
    number1: 30,
    number2: 40
};

function addNumbers(number3, number4) {

    /* console.log(this);
    console.log(this.number1); */

//    console.log(this.number1 + this.number2 + number3 + number4);
//}

//addNumbers(10, 20);

//call


/* addNumbers.call(obj1, 100, 200);
addNumbers.call(obj2, 100, 200); */

//apply callun arraylisi

/* addNumbers.apply(obj1, [100, 200]);
addNumbers.apply(obj2, [100, 200]); */

//bind  kopya fonksiyon gibi

/* function getNumbersTotal(number3, number4) {
    return this.number1 + this.number2 + number3 + number4;
}

const copyfunc1 = getNumbersTotal.bind(obj1);
const copyfunc2 = getNumbersTotal.bind(obj2);

console.log(copyfunc1(100, 200));
console.log(copyfunc2(100, 200)); */


/* console.log(copyfunc1);
console.dir(copyfunc1);
console.log(copyfunc2);
console.dir(copyfunc2); */


//prototype kalıtım

/* function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.showinfos = function () {
    console.log(this.name, this.age);
}

/* const person = new Person("Mustafa", 25);
console.log(person); */

/* function Employee(name, age, salary) {
    /* this.name = name;
    this.age = age; */

/*     Person.call(this, name, age);
    this.salary = salary;
}

Employee.prototype.showinfos = function () {
    console.log(this.name, this.age, this.salary);
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("mustafa", 25, 4000);

//console.log(emp);

emp.showinfos();
console.log(emp.toString());


console.log(emp); */


