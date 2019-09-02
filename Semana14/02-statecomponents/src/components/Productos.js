import React, { Component } from 'react'
export default class Productos extends Component {

    constructor(props) {
        super(props);
        console.log("Productos constructor");
        this.state = {
            productos: props.productos,
            producto: {},
        };
    }

    seleccionarProducto = (prod) => {
        console.log(prod);
        this.setState({
            producto: prod
        })
    }

    componentDidMount() {
        console.log("Producto componentDidMount");
        // Funcion que se ejecuta luego del render cuando todo DOM ya ha sido cargado
        // Esta función sólo se ejecuta una vez
        // Esta funcion puede modificar el state
        // Esta funcion se usa generalmente, para traer data mediante API's.
        // Esta funcion tambien es usada para settear objetos JQUERY,
        // EJM: DatePickers, modales, datatables, etc
    }

    generarAleatorio = e => {
        // generando un producto aleatorio
        let productoTmp = {
            id: Math.floor(Math.random() * (50 - 5)) + 5,
            nombre: 'Producto aleatorio',
            precio: Math.random() * (10000 - 1000) + 1000,
        };
        this.setState({
            productos: [...this.state.productos, productoTmp]
        });
    }

    render() {
        console.log("Productos render");

        let { productos } = this.state;

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
                                                this.props.seleccionarProducto(prod);
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
                {
                    this.state.producto.nombre ?
                        (<p>Producto Seleccionado: {this.state.producto.nombre}</p>) :
                        (<p>No has seleccionado ningun producto</p>)
                }

                <button onClick={this.generarAleatorio}>
                    Generar Producto aleatorio
                </button>

            </div>
        )
    }
}