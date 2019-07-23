var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    return function (target) {
        target.prototype.saludar = function () {
            console.log("Buenas " + texto);
        };
        target.prototype.anio = new Date().getFullYear();
    };
}
let Grupo = class Grupo {
    constructor(integrantes, nombre) {
        this.integrantes = integrantes;
        this.nombre = nombre;
    }
    imprimirIntegrantes() {
        this.integrantes.forEach((integrante) => console.log(integrante));
    }
};
Grupo = __decorate([
    decorador("Texto de prueba")
], Grupo);
let codigo5 = new Grupo([], "");
codigo5.saludar();
console.log(codigo5.anio);
