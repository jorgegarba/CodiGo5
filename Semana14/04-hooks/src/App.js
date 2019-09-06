import React, { useState, useEffect } from 'react';
import Prueba from './components/Prueba';

const App = () => {
  console.log("Componente App");

  // Inicializar contador seria como el siguiente codigo con state
  // state = {
  //   contador: []
  // }
  const [contador, setContador] = useState(0);
  const [pabellones, setPabellones] = useState(0);

  useEffect(() => {
    console.log("Effect ejecutándose de pabellones");
  }, [pabellones])

  useEffect(() => {
    console.log("Effect ejecutándose de contador");
    document.title = `You clicked ${contador} times`;
  }, [contador])

  return (
    <div>
      <h1>Contador => {contador}</h1>
      <h1>Pabellones => {pabellones}</h1>
      <hr />
      <button onClick={() => {
        let c = contador;
        c++;
        // this.setState({
        //   contador: c
        // })
        setContador(c);
      }}>
        Incrementar el contador
      </button>
      <hr />
      <button onClick={() => {
        let p = pabellones;
        p++;
        // this.setState({
        //   contador: c
        // })
        setPabellones(p);
      }}>
        Incrementar Pabellones
      </button>
      <Prueba>
        <p>parrafo</p>
        <p>parrafo</p>
        <p>parrafo</p>
      </Prueba>
    </div>
  );
}

export default App;
