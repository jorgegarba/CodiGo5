import React from 'react';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

    let usuRef = React.createRef();
    let passRef = React.createRef();

    const iniciarSesion = e => {
        e.preventDefault();
        // console.log(usuRef.current.value);
        // console.log(passRef.current.value);
        props.signin();
        
    }

    return (
        <main className="container mt-5">
            <form onSubmit={iniciarSesion}>
                <div className="form-group">
                    <label htmlFor="">Usuario:</label>
                    <input type="text" className="form-control"
                        placeholder="Ingrese usuario"
                        ref={usuRef} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" className="form-control"
                        placeholder="Ingrese password"
                        ref={passRef} />
                </div>
                <input type="submit" value="Iniciar Sesion"
                    className="btn btn-primary" />
            </form>
            {
                props.isLogged ?
                    <p className="text-success">EL USUARIO ESTÁ LOGGEADO</p> :
                    <p className="text-danger">EL USUARIO NO ESTÁ LOGGEADO</p>
            }
        </main>
    );
}

export default withRouter(Login);
