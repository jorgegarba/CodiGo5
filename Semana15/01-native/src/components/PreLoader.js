import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'

const PreLoader = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            backgroundColor: '#242935'
        }}>
            <ActivityIndicator size="large" />
        </View>
    )
}
export default PreLoader
