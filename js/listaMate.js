import Lista from "./lista.js";
import Material from './material.js';

class ListaMate {
    constructor(name) {
        this.name = name;
        this.sections = new Array();
        this.body = document.querySelector('body');
        this.btnNew = document.getElementById('config');
        this.init();
        this.valor = this.genereationId()
    }
    init(){
        this.validarSecName = this.validarSecName.bind(this);
        this.btnNew.onclick = () => {
            let div = document.createElement('div');
            div.className ="main__entrada--card modal";
            div.id = "modal";
            div.innerHTML = `<header class="modal__head">
                                <h2>New Section</h2>
                                <span class="btn btn__modal--cerrar" id="cerrar">X</span>
                            </header>
                            <p>
                            <label class="modal__item">
                                <span>Nombre de la Section:</span>
                                <input type="text" placeholder="Ej. Lista1" class="input" id="nombreSec">
                            </label>
                            <label class="modal__item">
                                <span>typo</span>
                                <select name="type" id="type" class="input">
                                    <option value="prima">Materia Prima</option>
                                    <option value="insumo">Insumo</option>
                                </select>
                            </label>
                            <button class="btn" id="crearSec">Crear</button>
                            </p>`
            this.body.prepend(div);
            wienModal(div, this.body);
            this.cerrardoModal()
            this.createNewsSection(div)
        }
        
    }
    
    cerrardoModal() {
        this.btnCerrar = document.getElementById("cerrar");
        this.btnCerrar.onclick = () => {
            let modal = document.getElementById("modal");
            this.body.removeChild(modal);
            this.body.classList.toggle("body");
        }
    }

    // methods generation of od makers
    *genereationId() {
        let id = 0;
        while (true) {
            yield id;
            id++;
        }
    }
    
    // function run generation process
    // runGen(){
        //     this.valor.next()
        // }
        // function wien Section in the DOM.
    wienSectionDom(name, type){
        let secId = this.valor.next()
        saliadaCard.innerHTML += `
        <div class="tabla__section" id="tabla${secId.value}">
        <h3 class="tabla__section--title"><b>${name}</b>&nbsp;<span class="btn config" id="newItem${secId.value}">New Item</span></h3>
        <label class="item__material">
        <span class="item__material--span">Nombre</span>
        <span class="item__material--span">Medida</span>
        <span class="item__material--span">costo</span>
        </label>
        </div>
        `
        return secId.value;
    }
        // function create new section
    createNewSection(modal) {
        let nombreSec = document.getElementById("nombreSec");
        let type = document.getElementById("type");
        if(nombreSec.value && type.value){
            let idSec = this.wienSectionDom(nombreSec.value, type.value);
            this.sections.push(new Lista(nombreSec.value, type.value, idSec));
            nombreSec.value = "";
            type.value = "";
            this.observer()
        } else {
            alert("!Debe llenar todos los campos!")
        }
        this.body.removeChild(modal);
        this.body.classList.toggle("body");
    }

    createNewsSection(modal) {
        let crearSec = document.getElementById('crearSec');
        crearSec.onclick = () => {
            this.createNewSection(modal)
        }
    }
    validarSecName(nameSec){
        let nombres = this.sections.filter(item => item.name === nameSec);
        return nombres[0];
    }

    observer(){
        this.sections.forEach(list => {
            list._ini()
        })
    }
    // newItem(){
        
    //     section.newItem(typeSec, nameItem, medidaItem, costoItem);
    // }
    // deteleItem(nameSec, nameItem){
    //     let section = this.validarSecName(nameSec);
    //     section.deteleItem(nameItem);
    // }


}
export default ListaMate;