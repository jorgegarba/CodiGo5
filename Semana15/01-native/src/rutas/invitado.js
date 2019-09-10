import HomeScreen from '../screens/invitado/Home';
import LoginScreen from './../screens/invitado/Login';
import RegisterScreen from '../screens/invitado/Register';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import React from 'react';
const InvitadoNavigator = createStackNavigator(
    {
        // para que un componente navegue a cualquiera de estas rutas
        // debe llamar a this.props.navigation.navigate('[nombre_de_ruta]')
        Home: {
            screen: HomeScreen,
            navigationOptions: () => {
                return {
                    header: null
                }
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: () => {
                return {
                    title: 'Inicio de Sesión',
                    headerTitleContainerStyle: {
                        justifyContent: 'center',
                        alignContent: 'center'
                    },
                    headerRight: (<View></View>),
                    headerTitleStyle: {
                        color: '#D73252'
                    },
                    headerTransparent: true
                }
            }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: () => {
                return {
                    title: 'Registrarse en la App',
                    headerTitleContainerStyle: {
                        justifyContent: 'center',
                        alignContent: 'center',
                    },
                    headerRight: (<View></View>),
                    headerTitleStyle: {
                        color: '#D73252'
                    },
                    headerTransparent: true
                }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);
export default createAppContainer(InvitadoNavigator);