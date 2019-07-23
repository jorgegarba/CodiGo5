class Producto {
    constructor(codigo, nombre, inventario) {
        this.id = "qwe2ef93mf94m";
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }
    get Id() {
        return this.id;
    }
    sumarInventario(cantidad) {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}
let objLeche = new Producto(123, "Leche de Soya", 900);
console.log(objLeche.Id);
