/* Pegue o primeiro elemento que encaixe no seletor especificado: */
document.querySelector(".main-nav a");

/* Pegue todos os elementos que encaixem nesses seletores especificados */
document.querySelectorAll(".post-content p");

// exemplos
document.querySelector(".masthead").classList

// Selecione um elemento
const ELEM = document.querySelector(".main-title");

// Defina o HTML inner
ELEM.innerHTML = "This is the new title";

// Defina o HTML outer (incluindo tags de elemento etc):
ELEM.outerHTML = '<h1 class="main-title">This is the new title</h1>';

