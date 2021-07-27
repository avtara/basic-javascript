const init = () => {
  let name = 'avtara';

  const greet = () => console.log(`${name}`);

  greet();
}

init();

function init2() {
  var name = 'Obi Wan';

  function greet() {
      console.log(`Halo, ${name}`);
  }

  return greet;
}

let myFunction = init2();
myFunction();

/* output
Halo, Obi Wan
*/

let add = () => {
  let counter = 0;
  return () => {
      return counter++;
  };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());