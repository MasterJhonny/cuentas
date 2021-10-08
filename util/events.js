// function modalInsta
//let config = document.getElementById('config');

let cerrar2 = document.getElementById('cerrar2');

// let crearSec = document.getElementById('crearSec');
let crearItem = document.getElementById('crearItem');


// ouputs
let saliadaCard = document.getElementById('saliadaCard');
//let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");


// function wien modal
const wienModal = (modal, body) => {
    modal.style.top = "20%";
    body.classList.toggle("body");
}

// create span en
const spanCreate = (text) => {
    let span = document.createElement("span");
    span.classList.add('item__material--span');
    span.textContent = text;
    return span;
}




