import Prima from './prima.js';
import Insumo from './insumo.js';
class Lista {
    constructor(name, type, id){
        this.name = name;
        this.type = type;
        this.id = id;
        this.items = new Array();
        this.body = document.querySelector("body");
    }
    _ini(){
        this.btnNewItem = document.getElementById(`newItem${this.id}`);
        this.btnNewItem.onclick = () => {
            let div = document.createElement('div');
            div.className ="main__entrada--card modal";
            div.id = "modal";
            div.innerHTML = `<header class="modal__head">
                                <h2>New Item</h2>&nbsp;<span class="btn btn__modal--cerrar" id="cerrar">X</span>
                            </header>
                            <p>
                                <label class="modal__item">
                                    <span>nombre:</span>
                                    <input type="text" placeholder="Ej. salchicha"  class="input" id="nombre">
                                </label>
                                <label class="modal__item">
                                    <span>medida</span>
                                    <input type="text" placeholder="Ej. kilos"  class="input" id="medida">
                                </label>
                                <label class="modal__item">
                                    <span>costo</span>
                                    <input type="number" placeholder="Ej. 38"  class="input" id="costo">
                                </label>
                                <button class="btn" id="crearItem">Crear</button>
                            </p>`
            this.body.prepend(div);
            wienModal(div, this.body);
            this.cerrardoModal()
            this.createNewsItems(div)
        }
    
    }
    cerrardoModal(){
        this.btnCerrar = document.getElementById("cerrar");
        this.btnCerrar.onclick = () => {
            let modal = document.getElementById("modal");
            this.body.removeChild(modal);
            this.body.classList.toggle("body");
        }
    }
    // mostrar intem en el DOM element
    wienItemDom(name, magnitud, costs){
        let tabla = document.getElementById(`tabla${this.id}`);
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
    // function que call a the creation of new items
    createNewsItems(modal){
        let crearItem = document.getElementById("crearItem");
        crearItem.onclick = () => {
            this.createNewItem(modal)
        }
    }
    // function create new Item
    createNewItem(modal){
        let nombre = document.getElementById("nombre");
        let medida = document.getElementById("medida");
        let costo = document.getElementById("costo");
        if(nombre.value && medida.value && costo.value){
            if(this.type === 'prima'){
                this.items.push(new Prima(nombre.value, medida.value, parseInt(costo.value)));
                this.wienItemDom(nombre.value, medida.value, costo.value);
            }
            if(this.type === 'insumo'){
                this.items.push(new Insumo(nombre.value, medida.value, parseInt(costo.value)));
               this.wienItemDom(nombre.value, medida.value, costo.value);
            }
            this.body.removeChild(modal);
            this.body.classList.toggle("body");
            // nombre.value = "";
            // medida.value = "";
            // costo.value = "";
            console.log(this)
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