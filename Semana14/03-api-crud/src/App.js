import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Pabellones from './components/Pabellones';
import CrearPabellon from './components/CrearPabellon';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header nombre={'AulasGo'} />
        {/* <Pabellones/> */}
        <CrearPabellon />
      </Fragment>
    )
  }
}