// Parte 1 - Array Simples

let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga', 'Abacaxi', 'Morango', 'Melancia', 'Pêssego', 'Kiwi', 'Limão', 'Cereja', 'Amora', 'Goiaba', 'Mamão', 'Coco', 'Jabuticaba', 'Pitaya', 'Acerola', 'Framboesa', 'Caju'];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("A. Elementos nas posições:");
console.log("Posição 0:", frutas[0]);   // Maçã
console.log("Posição 7:", frutas[7]);   // Melancia
console.log("Posição 11:", frutas[11]); // Cereja
console.log("Posição 15:", frutas[15]); // Coco
console.log("Posição 18:", frutas[18]); // Acerola
console.log("Posição 20:", frutas[20]); // Caju

// B. Qual elemento está na penúltima e última posição?
console.log("\nB. Penúltima e última posição:");
console.log("Penúltimo:", frutas[frutas.length - 2]); // Framboesa
console.log("Último:", frutas[frutas.length - 1]);     // Caju

// C. Quantos elementos existem no array?
console.log("\nC. Quantidade de elementos:", frutas.length); // 21

// D. Adicione um novo elemento ao final do array
frutas.push("Tangerina");
console.log("\nD. Array após adicionar 'Tangerina':", frutas);

// E. Imprima todos os elementos usando um for
console.log("\nE. Todos os elementos:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`Posição ${i}: ${frutas[i]}`);
}