class Material {
    constructor(name, medida, costo){
        this.name = name;
        this.medida = medida;
        this.costo = costo;
        this.cantidadPedir = 0;
        this.totalCosto = 0;
    } 
    calularTolal(){
        let {totalCosto, cantidadPedir, costo } = this
        totalCosto = cantidadPedir * costo
    }
}

export default Material;