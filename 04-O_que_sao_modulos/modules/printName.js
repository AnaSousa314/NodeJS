// function printName(name){
//   console.log(name);
// }

// const lastName = 'Sousa'

// module.exports = {printName,lastName}

//Outra forma de se exportar

exports.printName=(name)=>{
  console.log(name);
}
  
exports.lastName = 'Sousa'

// Módulo Nativo
const os = require('os');

console.log(os.type());