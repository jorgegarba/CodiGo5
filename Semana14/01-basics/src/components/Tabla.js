import React, { Fragment } from 'react';

const Tabla = (props) => {

    let llamarAlPadre = (e) => {
        props.distinto();
    }

    return (
        <Fragment>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((mascota, i) =>
                            (
                                <tr key={i}>
                                    <td>{mascota.nombre}</td>
                                    <td>{mascota.tipo}</td>
                                    <td>
                                        <button onClick={
                                            () => {
                                                props.distinto(mascota.nombre);
                                            }
                                        }>
                                            Enviar {mascota.nombre}
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <button onClick={llamarAlPadre}>
                Referencia a una funcion
            </button>
            <button onClick={() => {
                props.distinto("Jorge");
            }}>
                Click al Padre | enviar datos a una funcion
            </button>
        </Fragment>
    );
}

export default Tabla;
