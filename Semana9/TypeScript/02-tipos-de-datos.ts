// String
let nombre:String = "Jorge";
nombre = "asdasd";
// number
let anio:number = 2019;
// boolean
let soltero:boolean = true;
// any => variable con cualquier tipo de dato
let multidato:any = "Texto";
multidato = 89;
multidato = true;

// Arreglos
let nombres:Array<String> = ["Jorge","Beto","Lucía"];
nombres.forEach((elemento:String)=>{
    console.log(elemento);
});
let numeros:Number[] = [234,3,23,1,-1];
let arregloMultidato:Array<any> = ["as",243,true];

let biDato:Number|String = "Jorge";
biDato = 45;

type alfanumerico = Number | String;
let biDato2:alfanumerico = 45;
biDato2 = "texto";

