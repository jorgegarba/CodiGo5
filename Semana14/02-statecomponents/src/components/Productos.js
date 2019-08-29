import React, { Component } from 'react'

export default class Productos extends Component {

    constructor(props) {
        super(props);
        console.log("Productos constructor");
        this.state = {
            producto: {},
        }
    }

    seleccionarProducto = (prod) => {
        console.log(prod);
        this.setState({
            producto: prod
        })
    }

    render() {
        console.log("Productos render");

        let { productos } = this.props;

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map(prod => {
                                return (
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{prod.precio}</td>
                                        <td>
                                            <button onClick={(e) => {
                                                this.seleccionarProducto(prod);
                                            }}>
                                                Seleccionar
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <p>Producto Seleccionado: {this.state.producto.nombre}</p>
            </div>
        )
    }
}