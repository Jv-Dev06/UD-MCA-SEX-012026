let listaFrutas = [
  { nome: "banana", preco: 5 },
  { nome: "uva", preco: 8 },
  { nome: "melancia", preco: 12 }
];

// Acessando o nome do primeiro item
console.log(listaFrutas[0].nome); // banana

// Percorrendo o array de objetos
for (let i = 0; i < listaFrutas.length; i++) {

  console.log("Fruta:", listaFrutas[i].nome);
  console.log("Preço:", listaFrutas[i].preco);
}
