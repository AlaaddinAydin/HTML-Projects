let value;

const programmer = {
    name: "oha naber",
    age: 23,
    email: "aynenbaba@gmail.com",
    langs: ["aynen", "baba", "falan"],

    address: {
        city: "ankara",
        street: "bahçelievler"
    },

    work: function () {
        console.log("aynen abab gebgeb ... ");
    }
}

value = programmer;

value = programmer.email; // eşşek değilsen kullanıcağın şey
value = ProgressEvent["email"];


value = programmer.langs;

value = programmer.address.city;


programmer.work();


const programmers = [
    { name: "mustafake", age: 25 },
    { name: "oğuz", age: 22 }
];

value = programmers[0].name;


console.log(value);