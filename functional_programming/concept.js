let PI = 3.14;

const hitungLuasLingkaran = (jari) => {
    return PI * (jari * jari);
} // impure function because the use of the function produces different values even though given the same parameter value.

console.log(hitungLuasLingkaran(4));

const luasLingkaran = (jari) => {
    return 3.14 * (jari * jari);
}

console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(8)); // 200.96
console.log(luasLingkaran(8)); // 200.96

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}

const person = {
    name: 'Bobo',
}

const newPerson = createPersonWithAge(18, person);
console.log({person, newPerson});

/* { person: { name: 'Bobo', age: 18 },
  newPerson: { name: 'Bobo', age: 18 } } */

const createPersonWithAge1 = (age, person) => {
    return { ...person, age };
}

const person1 = {
    name: 'Bobo',
}

const personWithAge1 = createPersonWithAge1(18, person1);
console.log({person1, personWithAge1});
/* { person1: { name: 'Bobo' },
  personWithAge1: { name: 'Bobo', age: 18 } } */

  // Immutable

const names = ["Joko", "Handoko", "Purwanto"];

const newNamesWithUnderscore = names.map((name) => `${name}_`);

console.log({names, newNamesWithUnderscore});

const user = {
    firstName: 'Joko',
    lastName: 'Jandoko',
}

const renameLastNameUser = (newLastName, user) => {
    return { ...user, lastName: newLastName };
}

const newUser = renameLastNameUser('Handoko', user);
console.log(newUser);

// recursive
const countDown = (start) => {
    console.log(start);
    if (start > 0) countDown(start - 1);
}

countDown(10);

// High Order Function
const hello = () => {
    console.log('Hello!');
}

const say = (func) => {
    func();
}

const sayHello = () => {
    return () => {
        console.log('sayHello!');
    }
}

hello();
say(hello);
sayHello()();

const fruits = ['apple', 'orange', 'banana'];
const arrMap = (arr, action) => {
    const loopTrough = (arr, action, newArr = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArr;
        return loopTrough(arr, action, [...newArr, action(arr[index])], index + 1);
    }
    return loopTrough(arr, action);
}

const newFruits = arrMap(fruits, (fruit) => `${fruit}!` );

console.log({
    fruits,
    newFruits,
});