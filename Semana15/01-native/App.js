import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Boton from './src/components/Boton';
import PreLoader from './src/components/PreLoader';
import BackgroundImage from './src/components/BackgroundImage';
import RutasInvitado from './src/rutas/invitado';
import * as SecureStore from 'expo-secure-store';
import base64 from 'react-native-base64'
import RutasLogged from './src/rutas/logged';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      cargado: false
    }
  }
  // esta funcion se llamara solo cuando el incio de sesion sea correcto
  iniciarSesionOk = token => {
    // 1 guardar el token en el storage
    SecureStore.setItemAsync('token', token).then(() => {
      // token guardado de manera exitosa
      // 2 cambiar el state a loggeado = true
      this.setState({
        logged: true
      });
    })
  }

  cerrarSesion = () => {
    // 1 borrar el token en el storage
    SecureStore.deleteItemAsync('token').then(() => {
      // token borrado de manera exitosa
      // 2 cambiar el state a loggeado = false
      this.setState({
        logged: false,
        cargado: true
      })
    })
  }

  verificarSesion = () => {

    // 1 verificar que exista un token
    SecureStore.getItemAsync('token').then(token => {
      // si existe, verificar su tiempo de vida
      let payload = token.split(".")[1];
      let payload_dec = JSON.parse(base64.decode(payload));
      if (payload_dec.exp > (new Date().getTime()) / 1000) {
        this.setState({
          logged: true,
          cargado: true
        });
        return;
      } else {
        SecureStore.deleteItemAsync('token').then(() => {
          this.setState({
            logged: false,
            cargado: true
          });
          return;
        })
      }

    }).catch(() => {
      // no hay token
      this.setState({
        logged: false,
        cargado: true
      })
    })
  }



  componentDidMount() {
    this.verificarSesion();
  }

  render() {
    if (!this.state.cargado) {
      return (<PreLoader />)
    }
    if (this.state.logged) {
      return (<RutasLogged screenProps={{ cerrarSesion: this.cerrarSesion }} />)
    } else {
      return (<RutasInvitado screenProps={{ iniciarSesionOk: this.iniciarSesionOk }} />)
    }
  }
}

