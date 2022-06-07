const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative');
require('./mind-grenade');

console.log(names);
console.log(sayHi);
console.log(data);
console.log(data.items, data.singlePerson);

sayHi(names.daniel);
sayHi(names.john);
sayHi('susan');
