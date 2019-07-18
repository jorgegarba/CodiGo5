export class Plato {
    key = "";
    nombre = "";
    descripcion = "";
    origen = "";
    calorias = 0;
    imagen = "";
    constructor(key,nombre,descripcion,origen,calorias,imagen) {
        this.key = key;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.origen = origen;
        this.calorias = calorias;
        this.imagen = imagen;
    }
}