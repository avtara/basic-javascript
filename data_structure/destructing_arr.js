const number = [1, 2, 3, 4, 5];

const [one, two, three, four] = number;
console.log(one, two, three, four); // output: 1, 2, 3, 4, 5

const [,, tiga, empat] = number;
console.log(tiga, empat); //ouput: 3, 4

a = 10;
b = 20;
console.log(a, b); // output: 10 20
[a, b] = [b, a];
console.log(a, b); // output: 20 10
