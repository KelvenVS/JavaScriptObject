const client = {
    name: "Kelven",
    age: 22,
    cpf: "112223334448",
    email: "kelven@dominio.com",
}

// console.log(`O nome do cliente é ${client.name} e tem a idade de ${client.age} `);
console.log(`O nome do cliente é ${client["name"]} e tem a idade de ${client["age"]} `);

// console.log(`Os três primeiros digitos do cpf é ${client.cpf.substring(0, 3)}`);

// const keys = ["name", "age", "cpf", "email","height"]; // undefined height
const keys = ["name", "age", "cpf", "email"];

keys.forEach( (key) => {
    console.log(`A chave ${key} e tem o valor ${client[key]}`);
});