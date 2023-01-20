const client = {
    name: "João",
    age: 24,
    email: "João@firma.com",
    tel: ["1193546871", "1194863514"]
};

client.adresses = [{
    road: "R. Jojo Climber",
    number: 1548,
    apartment: true,
    complement: "ap 74",
}];

client.adresses.push({
    road: "R Jojo Layer",
    number: 404,
    apartment: false,
})

// console.log(client.adresses);

const listOfApartment = client.adresses.filter(
    (adresses) => adresses.apartment === true
);

console.log(listOfApartment);