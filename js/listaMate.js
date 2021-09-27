import Lista from "./lista.js";
import Material from './material.js';
class ListaMate {
    constructor(name) {
        this.name = name;
        this.sections = new Array();
        this.init();
        this.valor = this.genereationId()
    }
    init(){
        this.validarSecName = this.validarSecName.bind(this);
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
            <h3 class="tabla__section--title">${name}<span class="btn config" onclick="newItem2()">new Item</span></h3>
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
                modal.style.top = "-60%";
                body.classList.toggle("body");
            } else {
                alert("!Debe llenar todos los campos!")
            }
        }
        validarSecName(nameSec){
            let nombres = this.sections.filter(item => item.name === nameSec);
            return nombres[0];
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