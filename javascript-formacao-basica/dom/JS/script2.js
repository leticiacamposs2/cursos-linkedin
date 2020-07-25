// Cria as constantes
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

// Acha o atributo alt
let altText = THEIMAGE.getAttribute("alt");

// Cria o elemento de legenda de figuras
let captionElement = document.createElement("figcaption");

/* Comentado para usar outra alternativa
// Cria um nó de texto para alt
let captionText = document.createTextNode(altText);

// Adicioa o texto ao final do elemento de lefenda de figuras
captionElement.appendChild(captionText);

// A imagem em destaque rece a legenda no final dela
FEATURED.appendChild(captionElement);

// Atualiza o valor de alt da imagem THEIMAGE para vazio
THEIMAGE.setAttribute("alt", "");*/

// Adiciona o valor de alt a legenda
captionElement.append(altText);

// Adiciona legenda a imagem
FEATURED.append(captionElement);

// Atualiza o valor de alt da imagem THEIMAGE para vazio
THEIMAGE.setAttribute("alt", "");

console.log(captionElement);
