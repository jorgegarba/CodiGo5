// procesp síncrono
// console.time("x");
// var a;
// var y = 100;

// setTimeout(() => {
//     a = 90;
//     console.log(a + y);
//     console.timeEnd("x");
// }, 2000);

let miPromesa = () => {
    // la funcion miPromesa, devuelve un ojbeto de tipo
    // Promise
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("error");
        },2000)
    })
}
// la funcion "then()" es disparada por la funcion (resolve)

// la funcion "then()" y "catch()" reciben en una funcion anonima
// el parametro que dicha funcion  envia

// la funcion "catch() es disaparada por la funcion (reject)"
miPromesa().then(respuesta=>{
            console.log("alumno encontrado");
            console.log(respuesta);
           }).catch(error=>{
            console.log(error);
           });
