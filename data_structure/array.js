// Array in javascript
let arr = ['chocolate', 69, true, 69.69, 'Programming'];
console.log(arr);

// Access array index number 1, index array start from 0
console.log(arr[1]); // output 69

console.log(arr[5]); // output undefined because OutOfBound, arr just have length 5, last index is 4
console.log(arr.length); // output 5, length of arr

arr.push('asede'); // add element of array on last array
console.log(arr); // ['chocolate', 69, true, 69.69, 'Programming', 'asede']

arr.pop(); // remove last element
console.log(arr); // ['chocolate', 69, true, 69.69, 'Programming']

arr.shift('asede'); //add element on first array
console.log(arr); //['asede', 'chocolate', 69, true, 69.69, 'Programming']

arr.unshift(); //remove first element
console.log(arr); //['chocolate', 69, true, 69.69, 'Programming']

delete arr[1]; // delete value element not element of array
console.log(arr); // ['chocolate', <1 empty item>, true, 69.69, 'Programming']

arr.splice(2,1); //delete element index number 2 just 1 element
console.log(arr); //['chocolate', true, 69.69, 'Programming']

arr.splice(2,2); //delete element index number 2 just 1 element
console.log(arr); //['chocolate', 69.69, 'Programming']