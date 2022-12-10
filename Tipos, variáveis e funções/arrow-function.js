function apresentar(nome) {
    return `Meu nome é ${nome}.`;
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}.`;
const soma = (num1, num2) => num1 + num2;

// console.log(apresentarArrow("Felipe"));         (Meu nome é Felipe.)
// console.log(soma(2, 5));                        (7)

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somento números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// console.log(somaNumerosPequenos(5, 11));        (Somento números de 1 a 9)
// console.log(somaNumerosPequenos(2, 7));         (9)