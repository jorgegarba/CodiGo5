import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class InfoAdicional extends Component {
    render() {
        console.log(this.props.screenProps.comentarios);
        return (
            <View>
                <Text> INFO ADICIONAL</Text>
            </View>
        )
    }
}
