
//console.log("Hello World")

// const modulo = require('./printName');

// modulo.printName(`Ana ${modulo.lastName}`);

// Desestruturado
const {lastName,printName} = require('./printName')

printName(`Ana ${lastName}`)