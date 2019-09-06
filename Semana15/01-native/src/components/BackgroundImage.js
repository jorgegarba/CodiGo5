import React from 'react'
import { ImageBackground } from 'react-native'

const BackgroundImage = (props) => {
    let { recurso, children } = props;
    return (
        <ImageBackground source={recurso} style={{ flex: 1 }}>
            {children}
        </ImageBackground>
    )
}

export default BackgroundImage
