const data = require("./client.json");

console.log(data.numero); //undefined
console.log(data.endereco.numero);
console.log(data.nome);
console.log(typeof data);

//turn into string
const clientInString = JSON.stringify(data);

console.log(clientInString);
console.log(typeof clientInString);

console.log(clientInString.name); //undefined

//turn into JSON
const objectClient = JSON.parse(clientInString);

console.log(objectClient);
console.log(typeof objectClient);
