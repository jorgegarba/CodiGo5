import React, { Component } from 'react'
import Alerta from './Alerta';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

export default class Pabellones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pabellones: [],
        }
    }

    componentDidMount() {
        console.log("componentDidMount");

        axios.get('http://localhost:5000/pabellon').then(data => {
            this.setState({
                pabellones: data.data.contenido
            })
        });
    }

    render() {

        let pabellonesTmp = this.state.pabellones;
        let pabellonesFinal = pabellonesTmp.map(p => {
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
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={data}
                />
        }
    </main>
)
    }
}
