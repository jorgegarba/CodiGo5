import React from 'react';

import PropTypes from 'prop-types';

const Alerta = ({ mensaje, tipo }) => {

    let clase = `alert alert-${tipo}`;

    return (
        <div className={clase} role="alert">
            <strong>{mensaje}</strong>
        </div>
    );
}

Alerta.propTypes = {
    mensaje: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
};

export default Alerta;
