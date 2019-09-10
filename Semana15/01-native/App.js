import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Boton from './src/components/Boton';
import PreLoader from './src/components/PreLoader';
import BackgroundImage from './src/components/BackgroundImage';
import RutasInvitado from './src/rutas/invitado';

import RutasLogged from './src/rutas/logged';

export default function App() {
  return (
    <RutasInvitado />
  );
}

