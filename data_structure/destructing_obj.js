const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18
};

let firstName = "Dimas";
let age = 20;

({firstName, lastName, age} = profile);
console.log(firstName, lastName, age); // output: John Doe 18

const {firstName, lastName, age, isMarriage = false} = profile; // default value

const {firstName: LocalFirstName, lastName: localLastName, age: locatAge} = profile; // Assigning to Different Local Variable Names

console.log(localFirstName, localLastName, localage); // output: John Doe 18

