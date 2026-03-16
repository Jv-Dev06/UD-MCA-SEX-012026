// ===============================
// 1️⃣ ARRAY (lista simples)
// ===============================

// Criando um array com nomes de comidas
let comidas = ["pizza", "hamburguer", "batata"];

// Mostra o primeiro elemento do array (posição 0)
console.log(comidas[0]); // pizza

// Mostra quantos elementos existem dentro do array
console.log(comidas.length); // 3

// Percorre todo o array usando for
for (let i = 0; i < comidas.length; i++) {
  // comidas[i] pega o item da posição atual
  console.log(comidas[i]);
}



// ===============================
// 2️⃣ OBJETO (uma comida só)
// ===============================

// Criando um objeto com propriedades
let comida = {
  nome: "pizza",   // propriedade nome
  preco: 30        // propriedade preco
};

// Acessando propriedades do objeto
console.log(comida.nome);  // pizza
console.log(comida.preco); // 30



// ===============================
// 3️⃣ ARRAY DE OBJETOS (cardápio)
// ===============================

// Aqui temos uma lista (array)
// onde cada item é um objeto
let cardapio = [
  { nome: "pizza", preco: 30 },
  { nome: "hamburguer", preco: 25 },
  { nome: "batata", preco: 15 }
];

// Acessando o nome do primeiro item
// Primeiro pegamos a posição [0]
// Depois acessamos a propriedade .nome
console.log(cardapio[0].nome); // pizza


// Percorrendo o array de objetos
for (let i = 0; i < cardapio.length; i++) {
  
  // cardapio[i] pega o objeto inteiro
  // .nome pega o nome do objeto
  // .preco pega o preço do objeto
  
  console.log("Comida:", cardapio[i].nome);
  console.log("Preço:", cardapio[i].preco);
}