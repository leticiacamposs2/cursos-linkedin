// // Uma função normal, chamada de forma explicita pelo nome:
// function multiplicaTermos(a, b) {
//     var resultado = a * b;
//     console.log(a + " multiplicado por " + b + " é: ", resultado);
// }
// multiplicaTermos(3, 4);

// // Função anônima armazenada na variável.
// // Invocada ao fazer a chamada de variável como uma função:
// var divideTermos = function() {
//     var resultado = 3 / 4;
//     console.log("3 dividido por 4 é: ", resultado);
// }
// divideTermos();

// // Expressões de funções imediatamente invocadas.
// // É executado assim que o navegador encontra:

// (function() {
//     var resultado = 12 / 0.72;
//     console.log("12 dividido por 0.75 é: ", resultado);
// }())

function findBiggestFraction(a, b) {
    var result;
    a > b ? result = ["firstFraction: " + a] : result = ["secondFraction: " + b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log(fractionResult);

// findBiggestFraction(firstFraction, secondFraction);

