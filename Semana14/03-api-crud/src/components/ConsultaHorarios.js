import React, { Component } from 'react'
import axios from 'axios';
import { URL_BACKEND } from './../environment/env';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Animated } from "react-animated-css";

const localizer = momentLocalizer(moment);

export default class ConsultaHorarios extends Component {
    refFechin = '';
    refFechfin = '';
    refAula = 0;
    constructor(props) {
        super(props);
        this.state = {
            pabellones: [],
            aulas: [],
            eventos: []
        }
        this.refFechin = React.createRef();
        this.refFechfin = React.createRef();
        this.refAula = React.createRef();
    }
    traerPabellones() {
        axios.get(`${URL_BACKEND}/pabellon`).then(rpta => {
            if (rpta.status === 200) {
                this.setState({
                    pabellones: rpta.data.contenido
                })
            }
        })
    }
    componentDidMount() {

        this.traerPabellones();

    }
    seleccionarPabellon = e => {
        let pab_id = e.target.value;
        let url = `${URL_BACKEND}/pabellon/${pab_id}/aulas`;
        axios.get(url).then(rpta => {
            if (rpta.status === 200) {
                this.setState({
                    aulas: rpta.data.contenido[0].t_aulas
                });
            }
        })
    }
    setEventos(reservas) {
        // [{
        //     start: new Date(),
        //     end: new Date(moment().add(1, "days")),
        //     title: "Some title"
        // }]

        let reservasTmp = reservas.map(res => {
            return ({
                start: res.res_fechin,
                end: res.res_fechfin,
                title: res.res_obs,
            })
        });

        this.setState({
            eventos: reservasTmp
        });
    }
    consultarHorario = e => {
        e.preventDefault();
        let url = `${URL_BACKEND}/reservabyfechas/${this.refAula.current.value}`;
        let data = {
            body_res_fechin: this.refFechin.current.value,
            body_res_fechfin: this.refFechfin.current.value
        }

        if (localStorage.getItem("token")) {
            let token;
            token = localStorage.getItem("token");

            let misHeaders = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

            axios.post(url, data, { headers: misHeaders })
                .then(rpta => {
                    console.log(rpta);
                    this.setEventos(rpta.data)
                })

        } else {
            return;
        }

    }
    render() {
        return (
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <main className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={this.consultarHorario}>
                                <div className="form-group">
                                    <label htmlFor="selectPabellones">Lista de Pabellones</label>
                                    <select name="" id="" className="form-control"
                                        onChange={this.seleccionarPabellon}>
                                        {
                                            this.state.pabellones.map(pab => {
                                                return <option value={pab.pab_id}>
                                                    {pab.pab_desc}
                                                </option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="selectPabellones">Lista de Aulas</label>
                                    <select name="" id="" className="form-control"
                                        ref={this.refAula}>
                                        {
                                            this.state.aulas.map(aula => {
                                                return <option value={aula.aula_id}>
                                                    {aula.aula_nro}
                                                </option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="selectPabellones">Hora de Inicio</label>
                                    <input type="datetime-local" className="form-control"
                                        ref={this.refFechin} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="selectPabellones">Hora de Fin</label>
                                    <input type="datetime-local" className="form-control"
                                        ref={this.refFechfin} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary"
                                        value="Consultar Horario" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <Calendar
                                localizer={localizer}
                                events={this.state.eventos}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: "100vh" }}
                            />
                        </div>
                    </div>
                </main>

            </Animated>
        )
    }
}
