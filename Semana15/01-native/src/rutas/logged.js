import HomeScreen from './../screens/logged/Home';
import ProfileScreen from './../screens/logged/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerComponent from './../components/CustomDrawerNavigation';
import React from 'react';

const LoggedNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => {
                return (
                    {
                        drawerLabel: 'Inicio',
                        drawerIcon: () => {
                            return (<Icon name="home"
                                size={15}
                                color='#C3C3C3' />)
                        }
                    }
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: () => {
                return (
                    {
                        drawerLabel: 'Mi Perfil',
                        drawerIcon: () => {
                            return (<Icon name="user"
                                size={15}
                                color='#C3C3C3' />)
                        }
                    }
                )
            }
        }
    },
    {
        contentComponent: CustomDrawerComponent,
        initialRouteName: 'Home',
        drawerBackgroundColor: '#4C4C4C',
        contentOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#fff8f8',
            activeBackgroundColor: '#999999'
        }
    }
);

export default createAppContainer(LoggedNavigator);