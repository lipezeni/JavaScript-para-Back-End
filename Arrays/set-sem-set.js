const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = [];

nomes.forEach(nome => {
    if (nomesAtualizados.includes(nome) == false){
        nomesAtualizados.push(nome);
    }
})
console.log(nomesAtualizados);