import React, { Component } from 'react'
import Alerta from './Alerta';
import axios from 'axios';
import Swal from 'sweetalert2'

export default class CrearPabellon extends Component {

    // descRef; xxx
    // para usar la referencia, colocar el siguiente atributo
    // en el input ref={this.descRef}

    constructor(props) {
        super(props);
        // this.descRef = React.createRef(); xxx
        this.state = {
            objPabellon: {
                descripcion: '',
                email: ''
            },
            error: false
        }
    }



    enviarFormulario = (e) => {
        e.preventDefault();
        // console.log(this.descRef.current.value); xxx
        if (this.state.objPabellon.descripcion.trim() === '') {
            if (!this.state.error) {
                this.setState({
                    error: true
                })
            }
        } else {
            if (this.state.error) {
                this.setState({
                    error: false
                })
            }
            let data = {
                pabellon: {
                    pab_desc: this.state.objPabellon.descripcion
                }
            }
            let misHeaders = {
                "Content-Type": "application/json"
            }
            axios.post("http://localhost:5000/pabellon",
                data, { headers: misHeaders }).then(rpta => {
                    if (rpta.status === 201) {
                        // mostrar mensaje de éxito
                        Swal.fire(
                            'Creado!',
                            'El pabellon se ha creado!',
                            'success'
                        )
                    } else {
                        // mostrat mensaje de error
                    }
                    this.setState({
                        objPabellon: {
                            descripcion: '',
                            email: ''
                        }
                    })
                })


        }

    }

    handleChange = e => {
        this.setState({
            objPabellon: {
                ...this.state.objPabellon,
                [e.target.name]: e.target.value
            }
        })
    }



    verError = () => {
        if (!this.state.error && this.state.objPabellon.descripcion === '') {
            // significa que es la primera carga
            return 'form-control';
        } else if (this.state.error) {
            return 'form-control is-invalid';
        } else {
            return 'form-control is-valid';
        }
    }

    render() {
        console.log("render");
        return (
            <main className="container mt-5">
                {
                    this.state.error ?
                        <Alerta mensaje="Los campos son obligatorios" tipo="danger" /> :
                        null
                }
                <form onSubmit={this.enviarFormulario}>
                    <div className="form-group">
                        <label htmlFor="inputNombre">Nombre del Pabellon</label>
                        <input type="text" placeholder="Nombre del Pabellon"
                            id="inputNombre" className={this.verError()} name="descripcion"
                            onChange={this.handleChange}
                            value={this.state.objPabellon.descripcion}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Campo de Prueba</label>
                        <input type="text" placeholder="Email"
                            id="inputEmail" className="form-control" name="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type="submit" value="Crear Pabellon"
                        className="btn btn-primary" />
                </form>
            </main>
        )
    }
}
