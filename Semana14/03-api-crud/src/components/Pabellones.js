import React, { Component } from 'react'
import Alerta from './Alerta';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { Animated } from 'react-animated-css';

class Pabellones extends Component {

    constructor(props) {
        console.log("Constructor pabellones");

        super(props);
        this.state = {
            pabellones: [],
        }
    }

    traerPabellones() {
        axios.get('http://localhost:5000/pabellon').then(data => {
            this.setState({
                pabellones: data.data.contenido
            })
        });
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.traerPabellones();
    }

    render() {

        let pabellonesTmp = this.state.pabellones;
        let pabellonesFinal = pabellonesTmp.map(p => {
            if (this.props.isLogged) {
                return (
                    {
                        pab_id: p.pab_id,
                        pab_desc: p.pab_desc,
                        createdAt: p.createdAt,
                        updatedAt: p.updatedAt,
                        // ...p => spread operator => crea una copia de las propiedades de p
                        actions: <Link className="btn btn-primary" to={`/pabellones/${p.pab_id}`} > Editar </Link >
                    }
                )
            } else {
                return (
                    {
                        pab_id: p.pab_id,
                        pab_desc: p.pab_desc,
                        createdAt: p.createdAt,
                        updatedAt: p.updatedAt,
                        // ...p => spread operator => crea una copia de las propiedades de p
                        // actions: <Link className="btn btn-primary" to={`/pabellones/${p.pab_id}`} > Editar </Link >
                    }
                )
            }

        })

        let data = {
            columns: [
                {
                    label: 'Identificador',
                    field: 'pab_id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Nombre',
                    field: 'pab_desc',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Creación',
                    field: 'createdAt',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Última actualización',
                    field: 'updatedAt',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Acciones',
                    field: 'actions',
                    sort: 'asc',
                    width: 150
                },
            ],
            rows: pabellonesFinal
        }

        return (
            <main className="container mt-5">
                {
                    this.state.pabellones.length === 0 ?
                        <Alerta mensaje={'No hay pabellones'}
                            tipo={'info'} /> :

                        <Animated animationIn="fadeIn">

                            <MDBDataTable
                                striped
                                bordered
                                hover
                                data={data}
                            />
                        </Animated>

                }
                {
                    this.props.isLogged ?
                        <button onClick={(e) => {
                            this.props.signout();
                        }}>LOGOUT</button> :
                        <button onClick={(e) => {
                            this.props.loggear();
                        }}>LOGIN</button>
                }

            </main>
        )
    }
}
// La funcion 'withRouter'
// sirve para que cuando el componente PABELLONES se renderice
// reciba en sus 'props' las propiedades del Router
// como por ejemplo match, history, etc
export default withRouter(Pabellones);