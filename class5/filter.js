const clients = require("./clients.json");

function filterApartwithoutaddon(clients) {
  return clients.filter((client) => {
    return (
      client.endereco.apartamento === true &&   // he is living in apartment
      !client.endereco.hasOwnProperty("complemento") // there is not
    );
  });
}

const filtered = filterApartwithoutaddon(clients);
console.log(filtered);
