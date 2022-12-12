const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set([1, 1, 2, 3, 4, 4]);
// console.log(meuSet)                              (Set(4) { 1, 2, 3, 4 })

const meuSet = new Set (nomes);
const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados);