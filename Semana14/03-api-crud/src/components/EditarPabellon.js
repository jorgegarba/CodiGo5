import React, { Component } from 'react'
import axios from 'axios';
import Alerta from './Alerta';
import Swal from 'sweetalert2';

export default class EditarPabellon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pab_id: props.match.params.pab_id,
            objPabellon: {},
            cargado: false,
            error: false
        }
    }


    componentDidMount() {
        let url = `http://localhost:5000/pabellon/${this.state.pab_id}`;
        axios.get(url).then(rpta => {
            if (rpta.status === 200) {
                this.setState({
                    objPabellon: rpta.data.contenido,
                    cargado: true
                })
            }
        });
    }

    handleChange = (e) => {
        this.setState({
            objPabellon: {
                ...this.state.objPabellon,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.objPabellon.pab_desc.trim() === '') {
            // Los campos estan en blanco
            this.setState({
                error: true
            })
        } else {
            // enviar data a la API
            // PUT
            let url = `http://localhost:5000/pabellon`;
            let data = {
                pabellon: {
                    ...this.state.objPabellon
                }
            };
            let misHeaders = {
                "Content-type": "application/json"
            };
            axios.put(url, data, { headers: misHeaders }).then(rpta => {
                if (rpta.status === 200) {
                    Swal.fire(
                        'Actualizado!',
                        "Pabellon actualizado correctamente",
                        "success"
                    );
                    // redireccionamos 
                    // OJO=> el objeto history está disponible
                    // gracias a que el component EditarPabellon se encuentra como
                    // componente hijo de 'Route'
                    this.props.history.push('/pabellones');
                } else {
                    console.log("error al actualizar el registro");
                }
            })
        }
    }
    
    render() {
        return (

            <main className="container mt-5">
                {
                    this.state.error ?
                        <Alerta tipo={'danger'} mensaje={"Todos los campos deben estar llenos"} /> :
                        null
                }

                {
                    !this.state.cargado ?
                        <div className="text-center">
                            <img src={require('./../imagenes/loading.gif')} />
                        </div>
                        :
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputDescripcion">
                                    Nombre del Pabellon
                            </label>
                                <input type="text" name="pab_desc" id="inputDescripcion"
                                    className="form-control"
                                    placeholder="Nombre del Pabellon"
                                    defaultValue={this.state.objPabellon.pab_desc}
                                    onChange={this.handleChange} />
                            </div>
                            <input type="submit" value="Guardar Cambios"
                                className="btn btn-primary" />
                        </form>
                }

            </main>
        )
    }
}
