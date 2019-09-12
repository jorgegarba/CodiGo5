import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';

export default class Profile extends Component {
    render() {
        console.log(this.props);

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Perfil del Usuario </Text>
                <Button onPress={() => {
                    this.props.screenProps.cambiarEstado();
                }}>ACTUALIZAR STATE</Button>
            </View>
        )
    }
}
