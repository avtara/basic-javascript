console.log("Hello, world!");

5;
2+3;

var yourName; // change using let, don`t use var
let yourAge;
const numberOfDays;

//  Ini komentar single line

/*
  Ini komentar multiple line
  hehe
*/

let lastName; // declaration assignment
lastName = "avtara"; // assign expression
console.log(lastName);

let myAge = 20;

let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

let a = 12;
let b = 9;

// arithmatic
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);
// Arithmatic big int
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

// String
const question = '"What do you think of JavaScript?" I asked';
console.log(question)

let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);
console.log("Windows path: C:\\Program Files\\MyProject");

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

//Boolean
let x = true;
let y = false;

console.log(typeof(x));
console.log(typeof(y));

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

// Null
let someLaterData = null;
console.log(someLaterData);

// Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

let c = 10;
let d = 5;
// Assign Operator
c += d;
console.log(x);
 
c += d; // artinya -> c = c + d;
c -= d; // artinya -> c = c - d;
c *= d; // artinya -> c = c * d;
c /= d; // artinya -> c = c / d;
c %= d; // artinya -> c = c % d;

// Comparison Operator
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// Logical Operator
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

// If/Else Statement
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

let x = 50;
if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

//Ternary Operation
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

/* Falsy 
Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number
*/

// Switch Statement
/*
switch (expression) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  ...
  ...
  default:
    // do something else
}
*/

let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

//For Loop
for(let i = 0; i < 5; i++) {
  console.log(i);
}

//For of loop
for(arrayItem of myArray) {
  // do something
}

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

//While 
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

//Do-While
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);
