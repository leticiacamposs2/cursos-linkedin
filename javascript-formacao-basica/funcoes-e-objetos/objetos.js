// let curso = new Object();

// curso.título = "Javascript: Formação básica";
// curso.instrutora = "Amanda Cavallaro";
// curso.nivel = "1";
// curso.dataDePublicações = 0;
// curso.numeroDeVisualizações = 0;

// console.log(curso);

// let curso = {
//     título: "Javascript: Formação básica",
//     instrutora: "Amanda Cavallaro",
//     nivel: "1",
//     dataDePublicações: 0,
//     numeroDeVisualizações: 0,
//     atualizaNumeroDeVisualizações: function() {
//         return ++curso.numeroDeVisualizações;
//     }
// }

// console.log(curso)


// construtor de objeto, um template onde eu psosa criar o meu objeto que será definido uma vez e depois utilizo ele repetidamente
// primeira letra maiuscula indica objeto e nao funcao normal
// com o this referencia o objeto e atribui cada uma das propriedades ao argumento relacionado, terminando cada linha com ;
function Curso(título, instrutora, nivel, dataDePublicações, numeroDeVisualizações, atualizaNumeroDeVisualizações) {
    this.título = título;
    this.instrutora = instrutora;
    this.nivel = nivel;
    this.dataDePublicações = dataDePublicações;
    this.numeroDeVisualizações = numeroDeVisualizações;
    this.atualizaNumeroDeVisualizações = function () {
        return ++curso.numeroDeVisualizações;
    }
}

// let curso01 = new Curso(
//     "Javascript: Formação básica", "Amanda Cavallaro", 
//     1, false, 1
// );

let cursos = [
    new Curso(
        "Javascript: Formação básica", "Amanda Cavallaro", 
        1, false, 0
    ),
    new Curso(
        "Javascript: Formação básica", "Amanda Cavallaro",
        1, true, 4486448523146
    ),
    new Curso("adjkadjaidja")
]

/** CLOJURES OU FECHAMENTO */
function fazerCalculo() {
    var a = 5;
    var b = 4;

    function multiplicarTermos() {
        var resultadoMultiplicação = a * b;
        return resultadoMultiplicação;
    }

    return multiplicarTermos;
}

var resultado = fazerCalculo();

console.log("O resultado: ", resultado());



