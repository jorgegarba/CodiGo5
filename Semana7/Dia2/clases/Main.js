let npedido1 = new NotaPedido(1,new Date(),true);
let fact1 = new Factura(1,new Date(),18);


let dnp1 = new Detalle(1,5,"libros",45.5);
npedido1.agregarDetalle(dnp1);
npedido1.recalculo();
npedido1.imprimirClase();

let dfact1 = new Detalle(1,10,"Cervezas",4.5);
fact1.agregarDetalle(dfact1);
fact1.recalculo();
fact1.imprimirClase();
