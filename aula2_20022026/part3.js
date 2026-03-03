// Parte 3 - Array de Objetos

let listaFrutas = [
    { nome: "Maçã", preco: 4 },
    { nome: "Banana", preco: 5 },
    { nome: "Uva", preco: 8 },
    { nome: "Melancia", preco: 12 },
    { nome: "Manga", preco: 6 },
    { nome: "Morango", preco: 10 },
    { nome: "Abacaxi", preco: 7 },
    { nome: "Laranja", preco: 3 },
    { nome: "Pêssego", preco: 9 },
    { nome: "Kiwi", preco: 11 }
];

// Acessando o nome do primeiro item
console.log(listaFrutas[0].nome); // Maçã

// Percorrendo o array de objetos
for (let i = 0; i < listaFrutas.length; i++) {
    console.log("Fruta:", listaFrutas[i].nome);
    console.log("Preço:", listaFrutas[i].preco);
}