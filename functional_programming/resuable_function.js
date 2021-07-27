// Array Map
const names = ["Handoko", "Suprayitno", "Alexander"];

const arrMap = names.map((name) => {return `<${name}>`});
console.log(arrMap);

// Array Filter
const arr = [1, '', 'Hallo', 0, null, , 'Harry', 14];
const arrFilter = arr.filter((item) => Boolean(item));
console.log(arrFilter);

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);

// Array Reduce
const arrReduce = students.reduce((acc, student) => acc + student.score, 0);
console.log(arrReduce);

// Array Some
const number = [1, 1, 2, 3, 5, 8, 13];
const even = number.some(element => element % 2 == 0);
console.log(even);

// Array Find
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// Array Sort
const num = [2, 1, 3, 2, 9, 5] 
num.sort();
console.log(num)

const numba = [1, 30, 2, 100];
const compareNumba = (a, b) => {
    return a - b;
}

const sorting = numba.sort(compareNumba);
console.log(sorting);

// Array every
const scores = [40, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// Array foreach
names.forEach(name => {
    console.log(`Hello, ${name}`);
})