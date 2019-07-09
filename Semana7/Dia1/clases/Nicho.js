class Nicho{
    // propiedades
    nicho_id = 0;
    nicho_nro = 0;
    nicho_est = "";
    nicho_pre = 0;
    pab_id = 0;
    // metodo constructor
    constructor(nicho_id, nicho_nro, nicho_est, nicho_pre, pab_id){
        this.nicho_id = nicho_id;
        this.nicho_nro = nicho_nro;
        this.nicho_est = nicho_est;
        this.nicho_pre = nicho_pre;
        this.pab_id = pab_id;
    }
    
    set estado(nuevoEstado){
        this.nicho_est = nuevoEstado;
    }

    get estado(){
        return this.nicho_est;
    }

    // metodos
    mostrarInfo(){
        console.log(`ID: ${this.nicho_id}
                     NRO: ${this.nicho_nro}
                     ESTADO: ${this.nicho_est}
                     PRECIO: S/.${this.nicho_pre}`);
    }
}