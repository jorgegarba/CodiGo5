import React, { Component } from 'react';
import Productos from './components/Productos';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: "Producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", precio: 200 },
        { id: 3, nombre: "Producto 3", precio: 300 }
      ],
      producto: {}
    }
  }

  seleccionarProducto = (producto) => {
    this.setState({
      producto: producto
    });
  }


  render() {
    return (
      <div>
        <Navbar marca={"CodiGo"} />
        <Productos productos={this.state.productos}
          seleccionarProducto={this.seleccionarProducto} />
      </div>
    )
  }
}
export default App;