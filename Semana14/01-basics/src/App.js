import React from 'react';
import Formulario from './components/Formulario';
import Mascotas from './components/Mascotas';
import Tabla from './components/Tabla';

function App() {

  let mascotas = [{ nombre: 'Monster', tipo: 'Cuy' },
  { nombre: 'Firulais', tipo: 'Pollo' }];

  let respuesta = "RESPUESTA";

  let padre = (nombre) => {
    console.log("Imprimiendo en el padre, que padre!");
    console.log(nombre);
    respuesta = nombre;
  }
  return (
    <div>
      <p>Parrafo01</p>
      <p>Parrafo02</p>
      <p>{respuesta}</p>
      <hr />
      <Formulario subtitulo={'Formulario de Registro de Usuarios'}
        descripcion={'Descripcion del formulario'} />
      <Mascotas mascotas={mascotas} />
      <Tabla data={mascotas} distinto={padre} />
    </div>

  );
}

export default App;
