function Persona(nombreInicial,appellidoInicial,nuevoDni="00000000"){
    var sueldo = 6000;

    var objPersona = {
        nombre:nombreInicial,
        apellido:appellidoInicial,
        edad:0,
        genero:'No especifica',
        dni:nuevoDni,
        email:'sin email',    
        cambiarNombre: function(nuevoNombre){
            this.nombre = nuevoNombre;
        },
        mostrarSueldo:function(){
            console.log(sueldo);
        },
        modificarSueldo: function(nuevoSueldo){
            sueldo = nuevoSueldo;
        },
        imprimirInfo: function(){
            console.log(`Nombre: ${this.nombre}
                        Apellido: ${this.apellido}
                        Sueldo: ${sueldo}`);
        }
    };

    return objPersona
}

var julio = Persona("Julio","Montesinos");
julio.cambiarNombre("Julius");
julio.modificarSueldo(10000);

var carlos = Persona("Carlos","Jimenez","57463748");
carlos.nombre = "Carlitos";

var william = Persona("William","Miranda");

julio.imprimirInfo();
carlos.imprimirInfo();
william.imprimirInfo();


var arreglo = [1,2,3,4,6,7,8];
console.log(arreglo);
// Elimina 1 elemento a partir de la posicion 3
arreglo.splice(3,1);
console.log(arreglo);