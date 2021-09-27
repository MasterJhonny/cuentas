import Prima from './prima.js';
import Insumo from './insumo.js';
class Lista {
    constructor(name, type, id){
        this.name = name;
        this.type = type;
        this.id = `tabla${id}`;
        this.items = new Array();
    }
    // mostrar intem en el DOM element
    wienItemDom(name, magnitud, costs){
        let tabla = document.getElementById(this.id);
        let label = document.createElement("label");
        let span1 = spanCreate(name);
        let span2 = spanCreate(magnitud);
        let span3 = spanCreate(costs);
        label.classList.add('item__material');
        label.appendChild(span1);
        label.appendChild(span2);
        label.appendChild(span3);
        tabla.appendChild(label);
    }
    // function create new Item
    createNewItem(modal){
        let nombre = document.getElementById("nombre");
        let medida = document.getElementById("medida");
        let costo = document.getElementById("costo");
        if(nombre.value && medida.value && costo.value){
            if(type === 'prima'){
                this.items.push(new Prima(nombre.value, medida.value, parseInt(costo.value)));
                wienItemDom(nombre.value, medida.value, costo.value);
            }
            if(type === 'insumo'){
                this.items.push(new Insumo(nombre.value, medida.value, parseInt(costo.value)));
                wienItemDom(nombre.value, medida.value, costo.value);
            }
            nombre.value = "";
            medida.value = "";
            costo.value = "";
            modal.style.top = "-60%"
            body.classList.toggle("body");
        } else {
            alert("!Debe llenar todos los campos!")
        }
    }

    // deteleItem(nameItem){
    //     let nombres = this.items.map(item => item.name);
    //     let index = nombres.indexOf(nameItem);
    //     let valorBorrado = this.items.splice(index, 1);
    //     console.log(this.items);
    // }
    mostrarLista() {
        console.log(this);
    }
}

export default Lista;