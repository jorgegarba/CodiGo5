import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as SecureStore from 'expo-secure-store';

export default class Comentarios extends Component {

    recuperarToken = () => {
        SecureStore.getItemAsync("token").then(token => {
            console.log(token);
        })
    }
    componentDidMount() {
        this.recuperarToken();
    }

    render() {
        console.log(this.props.screenProps.comentarios);

        return (
            <View>
                <Text> COMENTARIOS </Text>
            </View>
        )
    }
}
