import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Pabellones from './components/Pabellones';
import CrearPabellon from './components/CrearPabellon';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditarPabellon from './components/EditarPabellon';
import Login from './components/Login';
var Msal = require('msal');


var msalConfig = {
  auth: {
    clientId: '5a5e93ba-2669-49b1-a233-5a2115f30717'
  }
};

var msalInstance = new Msal.UserAgentApplication(msalConfig);


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: true
    }

  }


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

  signin = () => {
    this.setState({ isLogged: true });
  }
  signout = () => {
    this.setState({ isLogged: false });
  }



  render() {
    return (
      <Fragment>
        {/* <Header nombre={'AulasGo'} /> */}
        {/* <Pabellones/> */}
        {/* <CrearPabellon /> */}
        <Router>
          <Header nombre={'AulasGo'} />
          <button onClick={this.iniciar}>INICIAR</button>
          {/* El elemento switch seria algo asi como el <router-outlet> de angular */}
          <Switch>
            {/* Cada ruta es un elemento Route */}
            {/* <Route exact path="/pabellones" render={() => {
              return <Pabellones isLogged={this.state.isLogged} loggear={this.loggear}  signout={this.signout}/>
            }} /> */}
            <Route exact path="/pabellones/crear" component={CrearPabellon} />
            {/* <Route exact path="/pabellones/:pab_id" render={(props) => {
              if (this.state.isLogged) {
                return <EditarPabellon />
              } else {
                return <Redirect to={{ pathname: '/pabellones/crear' }} />
              }

            }} /> */}


            <Route exact path="/pabellones" render={() => {

              if (this.state.isLogged) {
                return <Pabellones />
              } else {
                return <Redirect to={{ pathname: '/login' }} />
              }

            }} />

            <Route exact path="/login" render={() => {

              return <Login signin={this.signin}
                isLogged={this.state.isLogged} />

            }} />


          </Switch>
        </Router>
      </Fragment>
    )
  }
}