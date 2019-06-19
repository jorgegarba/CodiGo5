// {
//     id:0,
//     cant:0,
//     descripcion:"",
//     punitario:0,
//     subtotal:0,
// }

function Factura(){
    var objFactura = {
        fecha: "00-00-0000",
        ruc: "00000000000",
        nroFactura: 0,
        rzSocial: "S/R",
        estado: "S/E",
        direccion: "S/D",
        subtotal: 0,
        total:0,
        igv:0,
        detalleFactura: [],
        agregarDetalle: function(objDetalle){
            this.detalleFactura.push(objDetalle);
            //llamar al algoritmo actualizarTotales();
            this.actualizarTotales();
        },
        eliminarDetalle: function(idDelDetalle){
            //eliminará un detalle de la colección de detalles
            //llamar al algoritmo actualizarTotales();
            for(var i = 0; i < this.detalleFactura.length; i++){
                if(this.detalleFactura[i].id === idDelDetalle){
                    this.detalleFactura.splice(i,1);
                }
            }
            this.actualizarTotales();
        },
        actualizarTotales: function(){
            // algoritmo para actualiza el subtotal y el total
            var totalLocal = 0;
            for(var i = 0; i < this.detalleFactura.length; i++){
                totalLocal = totalLocal + this.detalleFactura[i].subtotal;
            }
            this.total = totalLocal;
            this.subtotal = +((this.total - (this.total*0.18)).toFixed(2));
            this.igv = +((this.total - this.subtotal).toFixed(2));
        }
    };
    return objFactura;
}

var miFactura = Factura();

var miDetalle1 = {
    id:1,
    cant:10,
    descripcion:"Chelas",
    punitario:6,
    subtotal:60,
};

var miDetalle2 = {
    id:2,
    cant:2,
    descripcion:"Huevos",
    punitario:0.5,
    subtotal:1,
};

// Crear el constructor del objeto Detalle Factura
// el cual va a recibir todos los parametros del detalle excepto
// el subtotal(que será calculado automaticamente multiplicando
// la cantidad por el precio unitario).
// 


// debugger;

miFactura.agregarDetalle(miDetalle1);

miFactura.agregarDetalle(miDetalle2);

miFactura.eliminarDetalle(1);

console.log(miFactura);

