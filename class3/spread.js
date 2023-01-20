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

function callClient(businessNumber, houseNumber) {
  console.log(`Ligando para ${businessNumber}`);
  console.log(`Ligando para ${houseNumber}`);
}

//spread
//callClient(client.tel[0],client.tel[1]);
callClient(...client.tel);

// const package = {
//   receiver: client.name,
//   adresses: client.adresses[0],
// };

// const package = {
//     receiver: client.name,
//     road: client.adresses[0].road,
//     number: client.adresses[0].number,
//     //adresses: client.adresses[0],
//   };

const package = {
    receiver: client.name,
    ...client.adresses[0],
}

console.log(package);
