import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Pabellones from './components/Pabellones';
import CrearPabellon from './components/CrearPabellon';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditarPabellon from './components/EditarPabellon';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header nombre={'AulasGo'} /> */}
        {/* <Pabellones/> */}
        {/* <CrearPabellon /> */}
        <Router>
          <Header nombre={'AulasGo'} />
          {/* El elemento switch seria algo asi como el <router-outlet> de angular */}
          <Switch>
            {/* Cada ruta es un elemento Route */}
            <Route exact path="/pabellones" component={Pabellones} />
            <Route exact path="/pabellones/crear" component={CrearPabellon} />
            <Route exact path="/pabellones/:pab_id" component={EditarPabellon} />


          </Switch>
        </Router>
      </Fragment>
    )
  }
}