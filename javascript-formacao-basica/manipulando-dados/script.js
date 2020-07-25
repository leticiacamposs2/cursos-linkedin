// var a = 5;
// var b = 4;
// var sum = a + b;
var emptyInside = null;
var justAnotherVariable;

// Armazena números

var number = 1;
var integer = 3.14159265359;
var negNumber = -1;
var negInteger = -3.14159265359;

// Armazena strings de letras e símbolos:

var string = "Linhas geralmente são palavras e sentenças.";
var mixedQuote = 'Isso mantém as "aspas".';
var escQuote = "Citações também podem ser \"assim\".";

// Armazena um ou o outro do par binário verdadeiro/falso:

var theSunIsWarm = true;
var theMoonIsMadeOfCheese = false;

// Operações matemáticas

a++; // Pegue o valor original e depois adicione 1 a ele
++a; // Adicione 1 ao valor

// NaN === uma ou mais variaveis contem uma string

var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

// console.log(theNumbersMatch);

/** Armazenando varios itens de uma vez */

// var caneta0 = "vermelha";

// var caneta1 = "azul";

// var caneta2 = "verde";

// var caneta3 = "laranja";

var canetas;

canetas = ["vermelha", "azul", "verde", "laranja"];

// canetas = new Array("vermelha", "azul", "verde", "laranja");

// console.log(canetas);

var variosElementos = ["chaves", 5, false, 568, "mais uma coisa"];

var quartaCaneta = canetas[3];

// console.log(quartaCaneta);


/** propriedades e métodos do array */

var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES
// Get a propertu of and object by name:
console.log("Array lenght: ", pens.length);

// METHODS:
// Reverse the array.
pens.reverse();

// Remove the first value of the array:
pens.shift();

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");

// Remove the last value of the array:
pens.pop();

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the
pens.splice(3,2) //starts at the second item and removes two items.

// console.log("After ", pens);

// Create a copy of an array. Typically a assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);
