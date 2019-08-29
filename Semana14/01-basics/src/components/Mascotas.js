import React from 'react';
import Mascota from './Mascota';

const Mascotas = (props) => {

    // let misMascotas = props.mascotas.map(m => {
    //     return (<Mascota />)
    // });

    return (
        <div>
            {
                props.mascotas.map((m, i) => {
                    return (<Mascota objMascota={m} key={i} />)
                })
            }
        </div>
    );
}

export default Mascotas;
