const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1177777700", "11122233"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(200);