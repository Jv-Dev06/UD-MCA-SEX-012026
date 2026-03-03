// Parte 2 - Objeto nomeObjeto

let nomeObjeto = {
    nome: "Notebook Gamer",
    preco: 4599.99,
    estoque: 50,
    marca: "ASUS",
    cor: "Preto"
};

// A. Como acessar o nome do objeto?
console.log("A. Nome do objeto:", nomeObjeto.nome); // Notebook Gamer

// B. Como acessar o preço usando colchetes?
console.log("B. Preço usando colchetes:", nomeObjeto["preco"]); // 4599.99

// C. Atualize o estoque para 80
nomeObjeto.estoque = 80;
console.log("C. Estoque atualizado:", nomeObjeto.estoque); // 80

// D. Imprima todas as propriedades no console
console.log("\nD. Todas as propriedades:");
for (let chave in nomeObjeto) {
    console.log(`${chave}: ${nomeObjeto[chave]}`);
}