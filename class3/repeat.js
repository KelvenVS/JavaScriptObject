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

//go through the client const
for (let key in client) {
  let type = typeof client[key];
  //verify that it is not an object
  if (type !== "object" && type !== "function") {
    console.log(`A chave ${key} tem o valor ${client[key]}`);
    //console.log(client[key]);
    // console.log(client.key);// undefined
    //console.log(key); // class name
  }
}
