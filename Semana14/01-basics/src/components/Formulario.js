import React,{Fragment} from 'react';

function Formulario(props) {


    let titulo = "Titulo del Formulario";

    return (
        <Fragment>
            <h2>{titulo}</h2>
            <h4>{props.subtitulo}</h4>
            <p>{props.descripcion}</p>
            <form >
                <input type="text" />
            </form>
        </Fragment>
    )

}

export default Formulario;