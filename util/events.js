// function modalInsta
let config = document.getElementById('config');
let cerrar1 = document.getElementById('cerrar1');
let cerrar2 = document.getElementById('cerrar2');

let crearSec = document.getElementById('crearSec');
let crearItem = document.getElementById('crearItem');
let body = document.querySelector('body');

// ouputs
let saliadaCard = document.getElementById('saliadaCard');
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");


// function wien modal
const wienModal = (modal) => {
    modal.style.top = "20%";
    body.classList.toggle("body");
}
const cerrarModal = (modal) => {
    modal.style.top = "-60%"
    body.classList.toggle("body");
}
// create span en
const spanCreate = (text) => {
    let span = document.createElement("span");
    span.classList.add('item__material--span');
    span.textContent = text;
    return span;
}
// // mostrar intem en el DOM element
// const wienItemDom = (name, magnitud, costs) => {
//     let tabla = document.querySelector(".tabla__section");
//     let label = document.createElement("label");
//     let span1 = spanCreate(name);
//     let span2 = spanCreate(magnitud);
//     let span3 = spanCreate(costs);
//     label.classList.add('item__material');
//     label.appendChild(span1);
//     label.appendChild(span2);
//     label.appendChild(span3);
//     tabla.appendChild(label);
// } 

// function create new Item
// const createNewItem = (modal) => {
//     let nombre = document.getElementById("nombre");
//     let medida = document.getElementById("medida");
//     let costo = document.getElementById("costo");
//     if(nombre.value && medida.value && costo.value){
//         wienItemDom(nombre.value, medida.value, costo.value);
//         nombre.value = "";
//         medida.value = "";
//         costo.value = "";
//         modal.style.top = "-60%"
//         body.classList.toggle("body");
//     } else {
//         alert("!Debe llenar todos los campos!")
//     }
// }
// action of function of click
const newItem2 = () => {
    wienModal(modal2);
}
// eventos btns
config.onclick = () => {
    wienModal(modal1)
}

cerrar1.onclick = () => {
    cerrarModal(modal1)
}

cerrar2.onclick = () => {
    cerrarModal(modal2);
}
