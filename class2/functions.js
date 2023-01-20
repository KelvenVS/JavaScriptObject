const client = {
  name: "João",
  age: 24,
  email: "João@firma.com",
  tel: ["1193546871", "1194863514"],
  balance: 200,

  makePayment: function (value) {
    if (value > this.balance) {
      console.log(`Saldo insuficiente`);
    } else {
      this.balance -= value;
      console.log(`Pagamento realizado. Novo saldo: ${this.balance}`);
    }
  },
};

client.makePayment(250);
client.makePayment(175);

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento
