const arr1 = [1, 2, 3, 4, 5];
console.log(...arr1); // output: 1 2 3 4 5 iterable object into multiple elements

const arr2 = [69, 96, 33];
const mergedArr1 = [arr1, arr2]; 
console.log(mergedArr1); // [[1, 2, 3, 4, 5], [69, 96, 33]]

const mergedArr2 = [...arr1, ...arr2]; 
console.log(mergedArr2);  // [1, 2, 3, 4, 5, 69, 96, 33]

const obj1 = {
  firstName: 'John',
};

const obj2 = {
  lastName: 'Doe',
};

const newObj = {
  ...obj1,...obj2
};
console.log(newObj); // {firstName: 'John', lastName: 'Doe'}