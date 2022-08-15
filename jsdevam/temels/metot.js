let value;

const firstName = "oha";
const lastName = "naber";

const langs = "java , python , c++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "mustafa oha";

value += "coşkun";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "ohanaber");

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];

value = firstName[2];

value = firstName[4];

value = firstName[firstName.length - 1];


value = firstName.indexOf("L");

value = firstName.indexOf("O");

value = firstName.indexOf("l");



value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);



value = langs.split(",");



value = langs.replace("python", "CSS");



value = langs.includes("java");
value = langs.includes("oha naber");





console.log(value);