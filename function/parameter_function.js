// Parameter Object 
const user = {
  id: 24,
  displayName: 'kren',
  fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

//Default Parameter
function exponentsFormula(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

//Rest Parameter
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
      result += number;
  }
  return result;
}
