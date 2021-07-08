// Object 
const user = {
  firstName: 'avtara',
  lastName: 'Khrisna',
  age: 20,
  isHandsome: true,
};
console.log(`Ola, my name is ${user.firstName} ${user.lastName}`);
// Access Object using bracket
user["isMarriage"] = false;
console.log(`Ola, my name is ${user.firstName} ${user.lastName}, is marriage ? ${user.isMarriage}`);

const spaceship = {
  name: 'Handoko H-245',
  ship: 'Handoko Engineering Coorporation',
  maxSpeed: 5000,
  color: 'Black Metalic'
};

// Change value of properties using assignment operator
spaceship.color = 'Glossy Grey';
console.log(spaceship.color); // output Glossy Grey

/*
const spaceship = {
  name: 'Handoko H-245',
  ship: 'Handoko Engineering Coorporation',
  maxSpeed: 5000,
  color: 'Black Metalic'
};

spaceship.color = 'Glossy Grey';
*/

delete spaceship.color; // delete color properties in spaceship object