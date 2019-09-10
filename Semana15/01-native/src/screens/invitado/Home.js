import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Boton from './../../components/Boton'
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground
                source={require('./../../../assets/bg.jpg')}
                style={{ flex: 1 }}>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Boton texto={"Iniciar Sesión"}
                        iconName={'sign-in'}
                        bgColor={'rgba(220,100,20,0.5)'}
                        action={() => {
                            this.props.navigation.navigate('Login');
                        }}
                        iconColor={'#fff'}
                        iconSize={30}
                        fullWidth={true}
                    />
                    <Boton texto={"Registrarme"}
                        iconName={'user-plus'}
                        bgColor={'rgba(220,200,50,0.5)'}
                        action={() => {
                            this.props.navigation.navigate('Register');
                        }}
                        iconColor={'#fff'}
                        iconSize={30}
                        fullWidth={true}
                    />
                    <Boton texto={"Facebook"}
                        iconName={'facebook'}
                        bgColor={'rgba(69,69,146,0.5)'}
                        action={() => { }}
                        iconColor={'#fff'}
                        iconSize={30}
                        fullWidth={true}
                    />
                </View>
            </ImageBackground>
        )
    }
}
