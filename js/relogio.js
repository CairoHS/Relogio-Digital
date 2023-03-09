
let tempo = document.querySelector("#Relogio");

function horas(){
    let horas = new Date().toTimeString().split(" ");
    tempo.innerHTML  = horas[0];
}
setInterval(() => horas(),250);