// function expression
const sayHello = (greet) => {
  console.log(`${greet}!`);
}

const sayName = (name) => {
  console.log(`Nama saya ${name}`);
}

// Single parameter without brackets
const sayLastName = lastName => {
  console.log(`Nama saya ${lastName}`);
}

// Without parameter
const sayHola = () => {
  console.log('Hello dunia');
}

// Arrow Function single line
const sayAge = age => console.log(age);

// Arrow Function single line restaurant
const add = (a,b) => a+b;

sayHello('halllloooo');
sayName('avtara');
sayLastName('Khrisna');
sayHola();
sayAge(23);
add(1,2);