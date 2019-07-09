// [Array].forEach((elemento,?i,?arreglo)=>{})
// función que sirve para recorrer un arreglo
// cada elemento del arreglo es entregado en un Callback
let nombres = ["Estrellita","Safiro","Lunita","Solange"];

nombres.forEach((nombre,i)=>{
    console.log(`${nombre} => ${i}`);
})