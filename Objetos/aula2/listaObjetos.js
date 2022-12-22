const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1177777700", "11122233"],
    
}

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
]

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamento = cliente.enderecos.filter((enderecos) => enderecos.apartamento === true)

console.log(listaApenasApartamento)