const client = {
  name: "João",
  age: 24,
  email: "João@firma.com",
  tel: ["1193546871", "1194863514"],
};

client.adresses = [
  {
    road: "R. Jojo Climber",
    number: 1548,
    apartment: true,
    complement: "ap 74",
  },
];

client.adresses.push({
  road: "R Jojo Layer",
  number: 404,
  apartment: false,
});

// console.log(client.adresses);

const listOfApartment = client.adresses.filter(
  (adresses) => adresses.apartment === true
);

console.log(listOfApartment);

const cliente = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"],
};
cliente.animalEstimacao = [
  {
    nome: "Kripto",
    raca: "Cão",
    vacinado: true,
  },
];
cliente.animalEstimacao.push({
  nome: "Lex",
  raça: "Gato",
  vacinado: false,
});

const animalEstimacao = cliente.animalEstimacao.filter(
  (animalEstimacao) => animalEstimacao.raca === "Cão"
);
console.log(animalEstimacao[0].nome);
