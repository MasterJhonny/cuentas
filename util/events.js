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

// action of function of click
const newItem2 = () => {
    wienModal(modal2);
}
// eventos btns
// config.onclick = () => {
//     wienModal(modal1)
// }

// cerrar1.onclick = () => {
//     cerrarModal(modal1)
// }

cerrar2.onclick = () => {
    cerrarModal(modal2);
}
