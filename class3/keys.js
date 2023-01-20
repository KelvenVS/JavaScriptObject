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

const keysofObject = Object.keys(client);
console.log(keysofObject);

if (!keysofObject.includes("adresses")) {
  //in case of not have address , return error message
  console.error("Erro. É necessario ter um endereço cadastrado");
}
