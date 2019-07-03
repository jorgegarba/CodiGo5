window.onload = function(){

    var divAulas = document.getElementById("aulas");

    /**
     * funcion encargada de dibujar las aulas en el divAulas
     */
    function imprimirAulas(arrayAulas) {
        // iteramos el arreglo de aulas
        for (let i = 0; i < arrayAulas.length; i++) {
            // en cada vuelta, es decir, en cada aula....
            // creamos el div contenedor el boton
            var divColumna2 = document.createElement("div");

            // asignamos la clase "col-md-2" para que los divs
            // se coloquen en columnas de 6 elementos por fila
            divColumna2.setAttribute("class","col-md-2");
            
            // creamos un boton que será el contenido del divColumna2
            var btnAula = document.createElement("button");
            // true => es laboratorio
            // analizamos el tipo de aula para personalizar el button
            if(arrayAulas[i].aula_tipo === true){
                // si el tipo de aula es true(laboratorio)
                // la clase del boton sera warning
                btnAula.innerHTML = `Lab - ${arrayAulas[i].aula_nombre}`;
                btnAula.setAttribute("class","btn btn-warning btn-block mb-4");
            }else{
                // si el tipo de aula es false(aula normal)
                // la clase del boton sera success
                btnAula.innerHTML = `${arrayAulas[i].aula_nombre}`;
                btnAula.setAttribute("class","btn btn-success btn-block mb-4");
            }
            // insertamos el boton a su contenedor, es decir,
            // la columna divColumna2
            divColumna2.appendChild(btnAula);
            // finalmente, insertamos la columna al div contenedor
            // de aulas (divAulas)
            divAulas.appendChild(divColumna2);
        }
    }

    /**
     * Funcion que traerá la lista de aulas
     */
    function cargarAulas(){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            switch(xhr.readyState){
                case 1:
                    break;
                case 2:
                    console.log("disparando llamada");
                    break;
                case 3:
                    console.log("cargando");
                    break;
                case 4:
                    console.log(xhr.responseText);
                    imprimirAulas(JSON.parse(xhr.responseText));
                    break;
            }
        }
        xhr.open("GET","http://5d1cd485f31e7f00147ebb7a.mockapi.io/aulas");
        xhr.send(null);
    }
    // invocando a la funcion para cargar las aulas
    cargarAulas();


}