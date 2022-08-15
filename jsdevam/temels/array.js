let value;

const numbers = [43, 45, 33, 23, 44, 5];

//const numbers2 = new Array(1, 2, 3, 4, 5, 6);

const langs = ["oha", "naber", "falan"];

const a = ["merhaba", 22, null, undefined];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

//değr değişimi

numbers[2] = 1000;

value = numbers;


value = numbers.indexOf(1000);


numbers.push(2000);

value = numbers;


numbers.unshift(3000);

value = numbers;


numbers.pop();

value = numbers;


numbers.shift();

value = numbers;


numbers.splice(0.3);

value = numbers;


numbers.reverse();

value = numbers;


value = numbers.sort();


value = numbers.sort(function (x,y) {
    return x - y; // k den b ye
});

value = numbers.sort(function (x, y) {
    return y-x; // b den  k ye
});

console.log(value);
