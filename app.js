const names = require('./names');
const sayHi = require('./utils');

console.log(names);
console.log(sayHi);

sayHi(names.daniel);
sayHi(names.john);
sayHi('susan');
