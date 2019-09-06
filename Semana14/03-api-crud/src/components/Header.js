import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ nombre, isLogged, signout }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
                {nombre}
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pabellones"
                            activeClassName="active" >
                            Pabellones
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pabellones/crear"
                            activeClassName="active">
                            Crear Pabellon
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {
                            isLogged ?
                                <Link className="nav-link" onClick={() => {
                                    signout();
                                }}>
                                    Cerrar Sesion
                                </Link> :
                                <NavLink className="nav-link" to="/login"
                                    activeClassName="active">
                                    Iniciar Sesión
                                </NavLink>
                        }
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
