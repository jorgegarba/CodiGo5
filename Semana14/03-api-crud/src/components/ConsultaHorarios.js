import React, { Component } from 'react'
import axios from 'axios';
import { URL_BACKEND } from './../environment/env';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default class ConsultaHorarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pabellones: [],
            aulas: [],
            fechin: '',
            fechfin: ''
        }
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

    render() {
        return (
            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="selectPabellones">Lista de Pabellones</label>
                                <select name="" id="" className="form-control"
                                >
                                    {
                                        this.state.pabellones.map(pab => {
                                            return <option value={pab.pab_id}>
                                                {pab.pab_desc}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <Calendar
                            localizer={localizer}
                            events={[{
                                start: new Date(),
                                end: new Date(moment().add(1, "days")),
                                title: "Some title"
                            }]}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: "100vh" }}
                        />
                    </div>
                </div>
            </main>
        )
    }
}
