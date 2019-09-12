import React, { Component } from 'react'
import { Text, View } from 'react-native'

import * as SecureStore from 'expo-secure-store';

export default class Home extends Component {
    state = {
        token: ''
    }
    componentDidMount() {
        SecureStore.getItemAsync('token')
            .then(token => {
                this.setState({
                    token: token
                })
            })
    }
    render() {
        return (
            <View>
                <Text> BIENVENIDO {this.state.token} </Text>
            </View>
        )
    }
}
