const mySet = new Set([1,2,3,3,4,3,2,1]);

console.log(mySet); //output: Set { 1, 2, 3, 4 }
mySet.add(100);
console.log(mySet); // output: Set { 1, 2, 3, 4, 100 }
mySet.delete(3);
console.log(mySet); // output: Set { 1, 2, 4, 100 }