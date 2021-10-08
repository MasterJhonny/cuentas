class Material {
    constructor(name, medida, costo, id) {
        this.name = name;
        this.medida = medida;
        this.costo = costo;
        this.id = id;
        this.cantidadPedir = 0;
        this.totalCosto = 0;
    } 
    _init(){
        //let costo = document.getElementById(`cost${this.id}`);
        let total = document.getElementById(`total${this.id}`);
        let count = document.getElementById(`count${this.id}`);
        count.oninput = () => {
            let cantidad = parseInt(count.value);
            total.innerText = cantidad * this.costo;
            this.cantidadPedir = cantidad;
            this.calularTolal()
        }
    }
    calularTolal(){
        let {cantidadPedir, costo } = this
        this.totalCosto = cantidadPedir * costo;
        console.log(this)
    }
}

export default Material;