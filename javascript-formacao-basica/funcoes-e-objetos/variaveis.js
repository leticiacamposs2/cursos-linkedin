// const MINHACONSTANTE = 5;
// console.log(MINHACONSTANTE);

// function logScope() {
//     var localVar = 2;

//     if(localVar){
//         var localVar = "Eu sou diferente"
//         console.log("localVar aninhada: ", localVar);
//     }
//     console.log("logScope localVar: ", localVar);
// }

// logScope();


function logScope() {
    let localVar = 2;

    if (localVar) {
        let localVar = "Eu sou diferente"
        console.log("localVar aninhada: ", localVar);
    }
    console.log("logScope localVar: ", localVar);
}

logScope();

// o let é para o scopo que a variavel possui

