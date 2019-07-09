class NotaPedido extends Comprobante{
    notap_exo = false;
    constructor(comp_id,comp_fecha,notap_exo){
        super(comp_id,comp_fecha);
        this.notap_exo = notap_exo;
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
        this.comp_total = total;
    }
}