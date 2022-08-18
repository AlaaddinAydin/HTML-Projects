//ecmascript


/* class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showinfos() {
        console.log(this.name, this.age, this.salary);
    }

}

const emp = new Employee("mustafa", 25, 400);

//console.log(emp);

emp.showinfos(); */


//statck metots

/* class Matematik {

    sqrt(x) {
        console.log(x * x);
    }

    static cube(x) {
        console.log(x * x * x);
    }
}

const math = new Matematik();

Matematik.cube(3);
math.sqrt(3);     // obje üzerinden erişilmez statik olnadan */

/* const math = new Matematik();

math.cube(3);

console.log(math); */


//console.log(Math.sqrt(4));


//kalıtım

class Person { // superclass baseclass

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showinfos() {
        console.log(this.name, this.age);
    }
}

class Employee extends Person { // dericed class subclass childclass

    constructor(name, age, salary) {
        /* this.name = name;
        this.age = age; */
        //yukarıdakinin aynısı

        super(name, age);


        this.salary = salary;
    }

    showinfos() {
        console.log(this.name, this.age, this.salary);
    }

    raiseSalary(amount) {
        this.salary += amount
    }
}

const emp = new Employee("ahmet", 25, 4000);

emp.raiseSalary(500);

console.log(emp);
emp.showinfos();