const myMap = new Map([
  ['1', 'string key'],
  [2, 'number key'],
  [true, 'boolean key']
]);

console.log(myMap); // output: Map { '1' => 'string key', 2 => 'number key', true => 'boolean' }

const country = new Map([
  ['Jakarta', 'Indonesia'],
  ['London', 'England'],
  ['Tokyo', 'Japan'],
]);

console.log(country.size); // output: 3
console.log(country.get('Jakarta')); //output: Indonesia
country.set('India','New Delhi');
console.log(country.size); // output: 4
console.log(country.get('India')); //output: New Delhi

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key")); // output: false
console.log(wrongMap.delete("My Key")); // output: false
