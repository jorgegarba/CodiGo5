class Comprobante{
    comp_id = 0;
    comp_fecha = new Date();
    comp_total = 0;
    detalles = [];
    constructor(comp_id,comp_fecha){
        this.comp_id = comp_id;
        this.comp_fecha = comp_fecha;
    }
    /**
     * Un objeto de la clase detalle que se agregará al arreglo de 
     * detalles
     * @param {Detalle} objDetalle 
     */
    agregarDetalle(objDetalle){
        this.detalles.push(objDetalle);
    }

    imprimirClase(){
        console.log(this);
    }

    static mostrarFechaActual(){
        console.log(new Date());
    }

    calcularSubtotal(cant, punitario){
        return cant*punitario;
    }
}