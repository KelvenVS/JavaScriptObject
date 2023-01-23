const clients =  require("./clients.json");
// console.log(clients);

function find(list , key , value){
    //Same value and type "==="
    // return list.find((item) => item[key] === value);
    return list.find((item) => item[key].includes(value));
}

const found = find(clients, "nome" , "Kirby");
console.log(found);
const found2 = find(clients, "email" , "aranahan2@yellowbook.com");
console.log(found2);

// if (true == 'true')  	// Retorna true
// if (true == '1')       	// Retorna  true
// if (true == true)    	// Retorna  true
// if (true === 'true') 	// Retorna  false
// if (true === '1')    	// Retorna  false
// if (true === true)   	// Retorna  true (igualdade estrita, mesmo tipo e mesmo valor)

//JavaScript - Diferença entre =, == e ===
//https://www.macoratti.net/18/09/js_dif1.htm 