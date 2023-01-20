const people = {
    name: "Luma",
    profession: "Engeneer"
};

console.log(people.name);

console.log(people["number"]);

people.number = "11 4076 8997";

console.log(people["number"]);

people.name = "Luma Silva";

console.log(people);

delete people.profession;

console.log(people);
console.log(people.profession);

//Não tem como reatribuir uma nova const
// const newPeople = {
//     name: "Kelven",
// };

// people = newPeople;