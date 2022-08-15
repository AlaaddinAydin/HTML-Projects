/* const langs = ["falan", "filan", "oha"];

langs.forEach(function (lang, index) {
    console.log(lang,index);
});


 */


/* const users = [
    { name: "ahmet", Age: 25 },
    { name: "lale", Age: 24 },
    { name: "namık", Age: 24 }

];

const names = users.map(function (user) {
    return user.name;
});


const ages = users.map(function (user) {
    return user.ages;
})

console.log(ages)
console.log(names); */

const user = {
    name: "mustafa",
    age: 25
}

for (let key in user) {
    console.log(key, user[key]);
}