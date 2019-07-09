class Factura extends Comprobante{
    fact_igv_p = 0;
    fact_igv_t = 0;
    constructor(comp_id,comp_fecha,fact_igv_p){
        super(comp_id,comp_fecha);
        this.fact_igv_p = fact_igv_p;
    }
    /**
     * Funcion que obtiene el nuevo igv tras agregar
     * y/o eliminar un detalle
     */
    recalculo(){
        let total = 0;
        for(let i = 0; i < this.detalles.length ; i++){
            total += this.calcularSubtotal(this.detalles[i].det_cant
                                         ,this.detalles[i].det_punit);
        }
        this.fact_igv_t = total * this.fact_igv_p / 100;
        this.comp_total = total;
    }
}