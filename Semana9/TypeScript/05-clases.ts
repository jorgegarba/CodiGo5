interface iProducto {
    codigo: number;
    nombre: string;
    inventario: number;
    /**
     * Sumará al inventario actual la cantidad de
     * [cantidad] unidades del producto
     * @param cantidad 
     * @return la cantidad actual de productos luego
     * de la suma del inventario
     */
    sumarInventario(cantidad: number): number;
}


class Producto implements iProducto {
    public codigo: number;
    public nombre: string;
    public inventario: number;
    private id: string = "qwe2ef93mf94m";

    constructor(codigo: number, nombre: string, inventario: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }
    
    get Id():string{
        return this.id;
    }

    sumarInventario(cantidad: number): number {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}

let objLeche:Producto = new Producto(123,"Leche de Soya", 900);
console.log(objLeche.Id);

