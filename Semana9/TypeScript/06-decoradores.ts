function decorador(texto:string){
    return function(target){
        target.prototype.saludar = function(){
            console.log("Buenas " + texto);
        }
        target.prototype.anio = new Date().getFullYear();
    }
}

@decorador("Texto de prueba")
class Grupo{
    integrantes:Array<string>;
    nombre:string;
    constructor(integrantes:Array<string>,nombre:string){
        this.integrantes = integrantes;
        this.nombre = nombre;
    }
    imprimirIntegrantes(){
        this.integrantes.forEach((integrante:string)=>console.log(integrante));
    }
}

let codigo5:Grupo = new Grupo([],"");
codigo5.saludar();
console.log(codigo5.anio);
