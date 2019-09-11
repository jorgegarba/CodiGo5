import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Curso from './../../components/Curso';
import PreLoader from '../../components/PreLoader';
import axios from 'axios';
import { URL_BACKEND } from './../../environments/environment';
export default class ListaCursos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cursos: [],
            cargado: false
        }
    }

    traerCursos() {
        console.log("traer CURSOS");

        axios.get(`${URL_BACKEND}/cursos`).then(rpta => {
            if (rpta.status === 200) {
                this.setState({
                    cursos: rpta.data.contenido,
                    cargado: true,
                })
            }
        })
    }
    componentDidMount() {
        console.log("dimount");
        
        this.traerCursos();
    }


    render() {
        if (!this.state.cargado) {
            return (<PreLoader />)
        }
        if (this.state.cursos.length === 0) {
            return (<Text>NO HAY CURSOS</Text>)
        } else {
            return (
                <ScrollView>
                    {
                        this.state.cursos.map(curso => {
                            return (
                                <Curso {...this.props} curso={curso} key={curso._id} />
                            )
                        })
                    }
                </ScrollView>
            )
        }
    }
}
