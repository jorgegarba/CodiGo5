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
        },
        // FORMA 1 => Con el constructor de detalles dentro de la Factura
        crearDetalle: function(_id, _cant, _descripcion, _punitario){
            //que retorne un objeto de tipo detalle
                var objDetalle = {
                    id:_id,
                    cant:_cant,
                    descripcion:_descripcion,
                    punitario:_punitario,
                    subtotal:_punitario * _cant,
                };
                return objDetalle;
            }
        
    };
    return objFactura;
}

// FORMA 2 => Con el constructor del Detalle independiente
// function Detalle(_id, _cant, _descripcion, _punitario){
//     //que retorne un objeto de tipo detalle
//     var objDetalle = {
//         id:_id,
//         cant:_cant,
//         descripcion:_descripcion,
//         punitario:_punitario,
//         subtotal:_punitario * _cant,
//     };
//     return objDetalle;
// }

var miFactura = Factura();

// Crear el constructor del objeto Detalle Factura
// el cual va a recibir todos los parametros del detalle excepto
// el subtotal(que será calculado automaticamente multiplicando
// la cantidad por el precio unitario).

// debugger;

// var miDetalle1 = miFactura.crearDetalle(1,10,"Chelas",6);
// var miDetalle2 = miFactura.crearDetalle(2,15,"Chizitos",0.5);

// llamada de la FORMA 2 => USANDO EL CONSTRUCTOR INDEPENDIENTE
// miFactura.agregarDetalle(Detalle(1,10,"Chelas",6));
// miFactura.agregarDetalle(Detalle(2,15,"Chizitos",0.5));

// llamada de la FORMA 1 => USANDO EL CONSTRUCTOR DENTRO DEL OBJETO FACTURA
miFactura.agregarDetalle(miFactura.crearDetalle(1,10,"Chelas",6));
miFactura.agregarDetalle(miFactura.crearDetalle(2,15,"Chizitos",0.5));

miFactura.eliminarDetalle(1);


prompt

console.log(miFactura);

