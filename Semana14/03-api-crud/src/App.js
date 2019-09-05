import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Pabellones from './components/Pabellones';
import CrearPabellon from './components/CrearPabellon';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditarPabellon from './components/EditarPabellon';
import Login from './components/Login';

import { AuthService } from './services/Auth';
import ConsultaHorarios from './components/ConsultaHorarios';

var Msal = require('msal');
var msalConfig = {
  auth: {
    clientId: '5a5e93ba-2669-49b1-a233-5a2115f30717'
  }
};

var msalInstance = new Msal.UserAgentApplication(msalConfig);


export default class App extends Component {


  _sAuth = new AuthService();

  constructor(props) {
    super(props);

    if (this._sAuth.isLogged()) {
      this.state = {
        isLogged: true
      }
    } else {
      this.state = {
        isLogged: false
      }
    }
  }

  // usar esta funcion en caso de inicio de sesion con maicrosof
  // NO RECOMENDABLE..... MICROSOFT APESTA
  iniciar = () => {
    var requestObj = {
      scopes: ["user.read"]
    };

    msalInstance.loginPopup(requestObj).then(function (loginResponse) {
      //Login Success callback code here
      console.log(loginResponse);

    }).catch(function (error) {
      console.log(error);
    });
  }

  signin = (email, pass) => {
    this._sAuth.login(email, pass).then(rpta => {
      console.log(rpta);
      if (rpta.status === 200) {
        this._sAuth.saveToken(rpta.data.token);
        this.setState({
          isLogged: true
        })
      }
    });
  }
  signout = () => {
    this._sAuth.cerrarSesion();
    this.setState({ isLogged: false });
  }

  render() {
    return (
      <Fragment>

        <Router>

          <Header nombre={'AulasGo'} isLogged={this.state.isLogged}
            signout={this.signout} />

          {/* El elemento switch seria algo asi como el <router-outlet> de angular */}
          <Switch>
            {/* Cada ruta es un elemento Route */}

            <Route exact path="/pabellones/crear" component={CrearPabellon} />

            <Route exact path="/pabellones" render={() => {

              if (this.state.isLogged) {
                return <Pabellones />
              } else {
                return <Redirect to={{ pathname: '/login' }} />
              }

            }} />

            <Route exact path="/login" render={() => {

              if (this.state.isLogged) {
                return <Redirect to={{ pathname: '/pabellones' }} />
              } else {
                return <Login signin={this.signin} />
              }

            }} />

            <Route exact path="/pabellones/consulta" render={() => {

              return <ConsultaHorarios />

            }} />


          </Switch>
        </Router>
      </Fragment>
    )
  }
}