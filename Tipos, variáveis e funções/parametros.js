// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e eu tenho ${idade} anos.`;
}

// console.log(nomeIdade(15, "Felipe"));    (retorna "Meu nome é 15 e eu tenho Felipe anos.")
console.log(nomeIdade("Felipe", 15));

function multiplica(number1 = 1, number2 = 1) {
    return number1 * number2;
}

console.log(multiplica(soma(2,3), soma(4, 5)));