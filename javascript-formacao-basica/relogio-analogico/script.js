const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");
const HORA = 360/12;
const MINUTO = 360/60;
const SEGUNDO = 360/60;

let date = new Date();

let Hr = date.getHours();
let Min = date.getMinutes();
let Seg = date.getSeconds();

let posicaoSeg = (Seg * SEGUNDO) % 360;
let posicaoMin = ((Min * MINUTO) + (posicaoSeg / 60)) % 360;
let posicaoHr = ((Hr * HORA) + (posicaoMin / 60)) % 360;

function executarRelogio(){

    posicaoSeg += (6);
    posicaoMin += (6/60);
    posicaoHr += (3/360);

    PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";

}

let intervalo = setInterval(executarRelogio, 1000);
