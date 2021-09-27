// import Prima from "./prima.js";
import Lista from './lista.js';
import ListaMate from './listaMate.js';

let listaMateriales = new ListaMate('Lista de Materiales');
// listaMateriales.newSection('Lista de Materia Prima', 'prima');
// listaMateriales.newSection('Lista de Insumos', 'insumo');
// listaMateriales.newItem('Lista de Insumos', 'insumo', 'Platito de salchicha', 'paquete', 14);
// listaMateriales.newItem('Lista de Insumos', 'insumo', 'bolsa de hamburguesa', 'paquete', 3);
// listaMateriales.newItem('Lista de Insumos', 'insumo', 'bolsita de salchi', 'paquete', 2);
// listaMateriales.newItem('Lista de Insumos', 'insumo', 'bolsita Mediana', 'paquete', 5);
// listaMateriales.newItem('Lista de Insumos', 'insumo', 'mondadiente', 'paquete', 15);
// console.log(listaMateriales.sections[1].items);

// listaMateriales.deteleItem('Lista de Insumos', 'bolsita de salchi');
// console.log(listaMateriales.sections[1].items);
// evente fo creatio de list section
crearSec.onclick = () => {
    listaMateriales.createNewSection(modal1);
}

// events the lista items
// crearItem.onclick = () => {
//     listaMateriales.sections[parseInt(valor)].createNewItem(modal1)
// }


// function gen(){
//     return function* (){
//         let id = 0;
//         while (true) {
//             yield id;
//             id++;
//         }   
//     }
// }

// let valor = listaMateriales.genereationId()
// valor.next()
// valor.next()

// listaMateriales.runGen()
// listaMateriales.runGen()
